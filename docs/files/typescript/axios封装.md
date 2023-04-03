# axios封装

```typescript
import { HttpErrorCode } from '@/types/common'
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({
    timeout: 0,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    },
    validateStatus: (status) => {
        return (status >= 200 && status < 300) || status === 403
    }
})
const pending = new Map()

/**
 * 获取请求指纹
 * @param config 
 * @returns 
 */
const getRequestFingerPrint = (config: AxiosRequestConfig):string => {
    return [
        config.url
    ].join('&')
}

/**
 * 添加请求
 * @param {Object} config 
 */
const addPending = (config: AxiosRequestConfig) => {
    const fingerPrint = getRequestFingerPrint(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(fingerPrint)) {
            pending.set(fingerPrint, cancel)
        }
    })
}

/**
 * 移除请求
 * @param {Object} config 
 */
const removePending = (config: AxiosRequestConfig) => {
    const fingerPrint = getRequestFingerPrint(config)
    if (pending.has(fingerPrint)) {
        const cancel = pending.get(fingerPrint)
        cancel(fingerPrint)
        pending.delete(fingerPrint)
    } else {
        // console.log('cancel request不存在或已完成！')
    }
}

/**
 * 通过请求接口地址取消请求
 * @param url 
 */
const cancelSingleRequestByUrl = (url: string): void => {
    removePending({url})
}

/**
 * 清空 pending 中的请求
 */
export const clearPending = () => {
    for (const [fingerPrint, cancel] of pending) {
        cancel(fingerPrint)
    }
    pending.clear()
}

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        removePending(config)
        addPending(config)
        return config
    }, (err) => {
        return Promise.reject(err)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (res: AxiosResponse) => {
        removePending(res.config)
        if ((res.status >= 200 && res.status < 300) || res.status === 403) {
            return res.data
        } else {
            let error = new Error(res.statusText)
            error.message = JSON.stringify(res)
            throw error
        }
    }, (err) => {
        if (axios.isCancel(err)) {
            console.log('Request canceled: ' + err.message)
            // 撤销请求resolve
            return Promise.resolve({ code: HttpErrorCode.Cancel, message: '请求被cancel' })
        } else {
            return Promise.reject(err)
        }
    }
)

export function post<T = any>(url: string, data: any): Promise<T> {
    return instance.request({url, method: 'POST', data})
}
```
