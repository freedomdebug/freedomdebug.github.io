import{_ as s,c as e,o as a,a as n}from"./app.e72a66ef.js";var l="/assets/nodemodules.59490202.jpg";const _=JSON.parse('{"title":"node\u5E38\u7528\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"chalk","slug":"chalk"},{"level":2,"title":"shelljs","slug":"shelljs"},{"level":2,"title":"recast","slug":"recast"},{"level":2,"title":"joi","slug":"joi"}],"relativePath":"files/nodejs/npm.md"}'),o={name:"files/nodejs/npm.md"},t=n('<p><img src="'+l+`" alt="alt \u5C5E\u6027\u6587\u672C"></p><h1 id="node\u5E38\u7528\u5305" tabindex="-1">node\u5E38\u7528\u5305 <a class="header-anchor" href="#node\u5E38\u7528\u5305" aria-hidden="true">#</a></h1><h2 id="chalk" tabindex="-1">chalk <a class="header-anchor" href="#chalk" aria-hidden="true">#</a></h2><blockquote><p>\u529F\u80FD: \u63A7\u5236\u53F0\u6253\u5370\u5E26\u989C\u8272\u7684\u8BF4\u660E</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const chalk = require(&#39;chalk&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.red(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.green(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">chalk.yellow(&#39;xxx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="shelljs" tabindex="-1">shelljs <a class="header-anchor" href="#shelljs" aria-hidden="true">#</a></h2><blockquote><p>\u529F\u80FD\uFF1A\u6267\u884C\u811A\u672C\u547D\u4EE4</p></blockquote><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const shell = require(&#39;shelljs&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const shellPromise = (cmd, silent = true) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        shell.exec(cmd, { silent: silent }, function(code, stdout, stderr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return code === 0 ? resolve(stdout) : reject(stderr)</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const test =  async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const currentBranch =  (await shellPromise(&#39;git branch --show-current&#39;) || &#39;&#39;).trim()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return currentBranch</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="recast" tabindex="-1">recast <a class="header-anchor" href="#recast" aria-hidden="true">#</a></h2><blockquote><p>\u73A9\u8F6CAST</p></blockquote><h2 id="joi" tabindex="-1">joi <a class="header-anchor" href="#joi" aria-hidden="true">#</a></h2><blockquote><p>nodejs\u670D\u52A1\u53C2\u6570\u9A8C\u8BC1 <a href="https://github.com/hapijs/joi/blob/v8.0.5/API.md#refkey-options" target="_blank" rel="noopener noreferrer">https://github.com/hapijs/joi/blob/v8.0.5/API.md#refkey-options</a></p></blockquote>`,12),c=[t];function r(p,i,h,d,A,C){return a(),e("div",null,c)}var y=s(o,[["render",r]]);export{_ as __pageData,y as default};