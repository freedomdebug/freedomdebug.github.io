# vite

## 2.2.*

* drop_console/drop_debugger

> node_modules\vite\dist\node\index.d.ts中类型声明

```javascript
 build: {
    target: 'es2015',
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true
        }
    },
},
```