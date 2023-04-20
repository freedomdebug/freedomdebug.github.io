import{_ as s,c as n,o as a,a as p}from"./app.90cdd80d.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"files/vue/vue3.2.md"}'),e={name:"files/vue/vue3.2.md"},l=p(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import type { PropType } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u5177\u4F53\u7684\u51FD\u6570\u7B7E\u540D\u6709\u52A9\u4E8E\u66F4\u597D\u7684\u7C7B\u578B\u63A8\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">type ApiFunction = () =&gt; any</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent({</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    apiAction: [String, Function] as PropType&lt;string | ApiFunction&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),o=[l];function t(c,r,i,A,C,_){return a(),n("div",null,o)}var u=s(e,[["render",t]]);export{y as __pageData,u as default};
