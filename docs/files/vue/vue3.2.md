```
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

// 定义具体的函数签名有助于更好的类型推断
type ApiFunction = () => any

export default defineComponent({
  props: {
    apiAction: [String, Function] as PropType<string | ApiFunction>,
    default: ''
  }
})
```
