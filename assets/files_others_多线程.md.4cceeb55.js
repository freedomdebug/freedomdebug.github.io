import{_ as e,c as s,o as r,a as o}from"./app.6550ffbc.js";const k=JSON.parse('{"title":"\u524D\u7AEF\u591A\u7EBF\u7A0B","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u524D\u7AEF\u591A\u7EBF\u7A0B","slug":"\u524D\u7AEF\u591A\u7EBF\u7A0B"},{"level":3,"title":"nodejs\u591A\u7EBF\u7A0B","slug":"nodejs\u591A\u7EBF\u7A0B"}],"relativePath":"files/others/\u591A\u7EBF\u7A0B.md"}'),a={name:"files/others/\u591A\u7EBF\u7A0B.md"},t=o(`<h3 id="\u524D\u7AEF\u591A\u7EBF\u7A0B" tabindex="-1">\u524D\u7AEF\u591A\u7EBF\u7A0B <a class="header-anchor" href="#\u524D\u7AEF\u591A\u7EBF\u7A0B" aria-hidden="true">#</a></h3><blockquote><p>\u6D4F\u89C8\u5668\u7AEF\uFF1A HTML5 \u5236\u5B9A\u4E86 Web Worker \u6807\u51C6\uFF08Web Worker \u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u4E3A JavaScript \u521B\u9020\u591A\u7EBF\u7A0B\u73AF\u5883\uFF0C\u5141\u8BB8\u4E3B\u7EBF\u7A0B\u521B\u5EFA Worker \u7EBF\u7A0B\uFF0C\u5C06\u4E00\u4E9B\u4EFB\u52A1\u5206\u914D\u7ED9\u540E\u8005\u8FD0\u884C\uFF09\u3002</p></blockquote><h3 id="nodejs\u591A\u7EBF\u7A0B" tabindex="-1">nodejs\u591A\u7EBF\u7A0B <a class="header-anchor" href="#nodejs\u591A\u7EBF\u7A0B" aria-hidden="true">#</a></h3><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cluster\u3001child_process\u3001worker_threads</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Node.js \u901A\u8FC7\u63D0\u4F9B cluster\u3001child_process API \u521B\u5EFA\u5B50\u8FDB\u7A0B\u7684\u65B9\u5F0F\u6765\u8D4B\u4E88Node.js \u201C\u591A\u7EBF\u7A0B\u201D\u80FD\u529B\u3002</p><p>\u4F46\u662F\u8FD9\u79CD\u521B\u5EFA\u8FDB\u7A0B\u7684\u65B9\u5F0F\u4F1A\u727A\u7272\u5171\u4EAB\u5185\u5B58\uFF0C\u5E76\u4E14\u6570\u636E\u901A\u4FE1\u5FC5\u987B\u901A\u8FC7json\u8FDB\u884C\u4F20\u8F93\u3002\uFF08\u6709\u4E00\u5B9A\u7684\u5C40\u9650\u6027\u548C\u6027\u80FD\u95EE\u9898\uFF09</p><p>\u57FA\u4E8E\u6B64 Node.js V10.5.0 \u63D0\u4F9B\u4E86 worker_threads\uFF0C\u5B83\u6BD4 child_process \u6216 cluster\u66F4\u8F7B\u91CF\u7EA7\u3002 \u4E0Echild_process \u6216 cluster \u4E0D\u540C\uFF0Cworker_threads \u53EF\u4EE5\u5171\u4EAB\u5185\u5B58\uFF0C\u901A\u8FC7\u4F20\u8F93 ArrayBuffer \u5B9E\u4F8B\u6216\u5171\u4EAB SharedArrayBuffer \u5B9E\u4F8B\u6765\u5B9E\u73B0</p></blockquote><blockquote><p>Node.js \u5E76\u6CA1\u6709\u5176\u5B83\u652F\u6301\u591A\u7EBF\u7684\u7A0B\u8BED\u8A00\uFF08\u5982\uFF1Ajava\uFF09\uFF0C\u8BF8\u5982&quot;synchronized&quot;\u4E4B\u7C7B\u7684\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u7EBF\u7A0B\u540C\u6B65\u7684\u6982\u5FF5\u3002Node.js\u7684 worker_threads \u533A\u522B\u4E8E\u5B83\u4EEC\u7684\u591A\u7EBF\u7A0B\u3002</p><p>\u5982\u679C\u6DFB\u52A0\u7EBF\u7A0B\uFF0C\u8BED\u8A00\u672C\u8EAB\u7684\u6027\u8D28\u5C06\u53D1\u751F\u53D8\u5316\uFF0C\u6240\u4EE5\u4E0D\u80FD\u5C06\u7EBF\u7A0B\u4F5C\u4E3A\u4E00\u7EC4\u65B0\u7684\u53EF\u7528\u7C7B\u6216\u51FD\u6570\u6DFB\u52A0\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u7406\u89E3\u4E3A\uFF1AJavaScript\u548CNode.js\u6C38\u8FDC\u4E0D\u4F1A\u6709\u7EBF\u7A0B\uFF0C\u53EA\u6709\u57FA\u4E8ENode.js \u67B6\u6784\u7684\u591A\u5DE5\u4F5C\u7EBF\u7A0B</p><p>Node\u7AEF\uFF1A\u91C7\u7528\u4E86\u548C Web Worker\u76F8\u540C\u7684\u601D\u8DEF\u6765\u89E3\u51B3\u5355\u7EBF\u7A0B\u4E2D\u5927\u91CF\u8BA1\u7B97\u95EE\u9898 \uFF0C\u5B98\u65B9\u63D0\u4F9B\u4E86 child_process \u6A21\u5757\u548C cluster \u6A21\u5757\uFF0C cluster \u5E95\u5C42\u662F\u57FA\u4E8Echild_process\u5B9E\u73B0\u3002</p><p>child_process\u3001cluster\u90FD\u662F\u7528\u4E8E\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF0C\u7136\u540E\u5B50\u8FDB\u7A0B\u95F4\u901A\u8FC7\u4E8B\u4EF6\u6D88\u606F\u6765\u4F20\u9012\u7ED3\u679C\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u5F88\u597D\u5730\u4FDD\u6301\u5E94\u7528\u6A21\u578B\u7684\u7B80\u5355\u548C\u4F4E\u4F9D\u8D56\u3002\u4ECE\u800C\u89E3\u51B3\u65E0\u6CD5\u5229\u7528\u591A\u6838 CPU \u548C\u7A0B\u5E8F\u5065\u58EE\u6027\u95EE\u9898\u3002</p><p>Node V10.5.0\uFF1A \u63D0\u4F9B\u4E86\u5B9E\u9A8C\u6027\u8D28\u7684 worker_threads\u6A21\u5757\uFF0C\u624D\u8BA9Node\u62E5\u6709\u4E86\u591A\u5DE5\u4F5C\u7EBF\u7A0B\u3002</p><p>Node V12.0.0\uFF1Aworker_threads \u5DF2\u7ECF\u6210\u4E3A\u6B63\u5F0F\u6807\u51C6\uFF0C\u53EF\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u653E\u5FC3\u4F7F\u7528\u3002</p></blockquote>`,6),c=[t];function d(p,l,n,_,i,h){return r(),s("div",null,c)}var f=e(a,[["render",d]]);export{k as __pageData,f as default};
