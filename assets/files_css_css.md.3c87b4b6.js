import{_ as s,c as n,o as a,a as p}from"./app.6381c036.js";var l="/assets/2017-8-24-input-noC.a91fbb79.gif",o="/assets/2017-8-24-input-withC.4e2d89c7.gif";const d=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":3,"title":"webpack","slug":"webpack"},{"level":3,"title":"input \u7684 compositionstart \u548C compositionend \u4E8B\u4EF6\uFF08\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165\uFF09","slug":"input-\u7684-compositionstart-\u548C-compositionend-\u4E8B\u4EF6\uFF08\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165\uFF09"},{"level":2,"title":"\u6A21\u7CCA\u5339\u914D\u67E5\u8BE2input","slug":"\u6A21\u7CCA\u5339\u914D\u67E5\u8BE2input"}],"relativePath":"files/css/css.md"}'),e={name:"files/css/css.md"},t=p(`<p>what</p><blockquote><p>\u6837\u5F0F\u8868</p></blockquote><p>why</p><blockquote><p>\u6E32\u67D3\u9875\u9762\uFF0C\u7ED3\u6784\u548C\u6E32\u67D3\u5206\u79BB</p></blockquote><p>css \u5947\u602A\u7528\u6CD5</p><blockquote><p>\u53D8\u91CF\uFF0C\u8BA1\u7B97\uFF0C\u4F2A\u7C7B\uFF0C\u4F2A\u5143\u7D20</p></blockquote><p>css\u9884\u7F16\u8BD1</p><p>\u201C\u539F\u751F\u7684 CSS \u4E0D\u652F\u6301\u5D4C\u5957\u5199\u6CD5, \u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 CSS \u7684\u6269\u5C55\u8BED\u8A00 Sass \u548C Less \u6765\u5B9E\u73B0\u5D4C\u5957.\u201D\uFF0C</p><p>stylus\uFF0Cless\uFF0Csass\uFF0Cscss</p><p>\u9884\u7F16\u8BD1\u8BED\u8A00\u5178\u578B\u7528\u6CD5</p><blockquote><p>\u5D4C\u5957\u8BED\u6CD5\u3001\u53D8\u91CF\u3001\u51FD\u6570\u3001\u6837\u5F0F\u6C61\u67D3\uFF0Cvue-scope\uFF0Cdeep\uFF0Crbga,\u5361\u5238 \uFF0Ccss hack\uFF0C flex\u5E03\u5C40</p></blockquote><p>css\u4E0Edom</p><p>1\u3001css\u5E76\u4E0D\u4F1A\u963B\u585EDOM\u6811\u7684\u89E3\u6790 2\u3001css\u52A0\u8F7D\u4F1A\u963B\u585EDOM\u6811\u6E32\u67D3 3\u3001css\u52A0\u8F7D\u4F1A\u963B\u585E\u540E\u9762js\u8BED\u53E5\u7684\u6267\u884C\uFF0C\u4E0D\u963B\u585Ejs\u7684\u52A0\u8F7D</p><p>css\u4E0E\u517C\u5BB9</p><p>\u9875\u7709\u5C4F\uFF0Cpostcss\uFF0Crem\uFF0Cvw\uFF0C</p><p>rem\u5BF9\u4E8E\u5185\u5D4C\uFF0C\u5916\u94FE\uFF0C\u884C\u5185\u6837\u5F0F\u7684\u5904\u7406</p><p>css\u4E0E\u7F16\u8BD1\u5DE5\u5177\uFF08gulp\uFF0Cwebpack\uFF0Cgrunt\uFF0Cvite\uFF0Crollup\uFF09</p><p>gulp\uFF1Agulp-minify-css\uFF0Cgulp-less\uFF0Cgulp-ruby-sass\uFF0C</p><p>webpack\uFF1Anode-sass\u3001style-loader\u3001css-loader\u3001sass-loader\uFF0Cpostcss-loader\uFF08<a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener noreferrer">Autoprefixer</a> \uFF09</p><p>vite\uFF1A less\u3001less-loader</p><p>rollup: postcss\u3001 rollup-plugin-postcs</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">  use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6267\u884C\u987A\u5E8F\uFF1A\u94FE\u5F0F\u7684\uFF0C\u6240\u4EE5\u5728use\u6570\u7EC4\u4E2D\u4E0B\u9762\u7684\u90E8\u5206\u4F1A\u5148\u6267\u884C\uFF0C\u6240\u4EE5\u4ED6\u4EEC\u7684\u6267\u884C\u987A\u5E8F\u5176\u5B9E\u662Fless-loader &gt; css-loader &gt; style-loader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5176\u5B9E\u4E3A\u5565\u662F\u4ECE\u53F3\u5F80\u5DE6\uFF0C\u800C\u4E0D\u4ECE\u5DE6\u5F80\u53F3\uFF0C\u53EA\u662FWebpack\u9009\u62E9\u4E86compose\u65B9\u5F0F\uFF0C\uFF08\u51FD\u6570\u7EC4\u5408\u7684\u4E24\u79CD\u5F62\u5F0F\uFF1A\u4E00\u79CD\u662Fpipe\uFF0C\u53E6\u4E00\u79CD\u662Fcompose\u3002\u524D\u8005\u4ECE\u5DE6\u5411\u53F3\u7EC4\u5408\u51FD\u6570\uFF0C\u540E\u8005\u65B9\u5411\u76F8\u53CD\u3002\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>less-loader\u539F\u7406\uFF0Cast\u8BED\u6CD5\u6811</p><p>CSSReset</p><p>css\u89C4\u8303</p><p>stylelint</p><p>psd\u5207\u56FE</p><h3 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h3><blockquote><p>\u7F16\u8BD1\u540Ecalc\u8868\u8FBE\u5F0F\u4E22\u5931\uFF0C\u91C7\u7528 width: ~&#39;calc(100% - 120px)&#39;;</p></blockquote><h3 id="input-\u7684-compositionstart-\u548C-compositionend-\u4E8B\u4EF6\uFF08\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165\uFF09" tabindex="-1">input \u7684 compositionstart \u548C compositionend \u4E8B\u4EF6\uFF08\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165\uFF09 <a class="header-anchor" href="#input-\u7684-compositionstart-\u548C-compositionend-\u4E8B\u4EF6\uFF08\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165\uFF09" aria-hidden="true">#</a></h3><p>\u5728 web \u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u901A\u5E38\u9700\u8981\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u6821\u9A8C\u3002\u8FD9\u6BB5\u4EE3\u7801\u867D\u7136\u6267\u884C\u8D77\u6765\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u4EA7\u751F\u975E\u76F4\u63A5\u8F93\u5165\uFF0C\u6BD4\u65B9\u8BF4\u6211\u4EEC\u8F93\u5165\u201C\u6811\u8393\u6D3E\u201D\uFF0C\u4E2D\u95F4\u8FC7\u7A0B\u4F1A\u8F93\u5165\u62FC\u97F3\uFF0C\u6BCF\u6B21\u8F93\u5165\u5B57\u6BCD\u90FD\u4F1A\u89E6\u53D1input\u4E8B\u4EF6\uFF0C\u7136\u800C\u5F53\u4E2D\u6587\u8F93\u5165\u5B8C\u6210\u4E4B\u524D\uFF0C\u90FD\u5C5E\u4E8E\u975E\u76F4\u63A5\u8F93\u5165\u3002</p><h4 id="\u672A\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165" tabindex="-1">\u672A\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165 <a class="header-anchor" href="#\u672A\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165" aria-hidden="true">#</a></h4><p><img src="`+l+`" alt="alt \u5C5E\u6027\u6587\u672C"></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5F53\u6211\u4EEC\u8F93\u5165 \u201C\u6811\u8393\u6D3E\u201D \u65F6\uFF0C\u89E6\u53D1\u4E869\u6B21 input \u4E8B\u4EF6\uFF0C\u8FD9\u5E76\u975E\u662F\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u5E0C\u671B\u76F4\u63A5\u8F93\u5165(\u4E2D\u6587\u8F93\u5165\u5B8C\u6210)\u540E\uFF0C\u518D\u89E6\u53D1 input \u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u5F15\u5165\u5176\u4ED6\u4E24\u4E2A\u4E8B\u4EF6 compositionstart \u548C compositionend</p><p>\u4E8B\u4EF6\u89E3\u91CA compositionstart \u662F\u6307\u4E2D\u6587\u8F93\u5165\u6CD5\u5F00\u59CB\u8F93\u5165\u89E6\u53D1\uFF0C\u6BCF\u6B21\u8F93\u5165\u5F00\u59CB\u4EC5\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u5F00\u59CB\u662F end \u4E8B\u4EF6\u7ED3\u675F\u4E86\u624D\u4F1A\u89E6\u53D1</p><p>compositonupdate \u662F\u6307\u4E2D\u6587\u8F93\u5165\u6CD5\u5728\u8F93\u5165\u65F6\u89E6\u53D1\uFF0C\u4E5F\u5C31\u662F\u53EF\u80FD\u5F97\u5230 shu\u2019mei \u8FD9\u79CD\u5185\u5BB9\uFF0C\u8FD9\u91CC\u8FD4\u56DE\u7684\u5185\u5BB9\u662F\u5B9E\u65F6\u7684\uFF0C\u4EC5\u5728 start \u4E8B\u4EF6\u89E6\u53D1\u540E\u89E6\u53D1\uFF0C\u8F93\u5165\u65F6\u5B9E\u65F6\u89E6\u53D1</p><p>compositionend \u662F\u6307\u4E2D\u6587\u8F93\u5165\u6CD5\u8F93\u5165\u5B8C\u6210\u65F6\u89E6\u53D1\uFF0C\u8FD9\u662F\u5F97\u5230\u7684\u7ED3\u679C\u5C31\u662F\u6700\u7EC8\u8F93\u5165\u5B8C\u6210\u7684\u7ED3\u679C\uFF0C\u6B64\u4E8B\u4EF6\u4EC5\u6267\u884C\u4E00\u6B21\u3002 \u9700\u8981\u7279\u522B\u6CE8\u610F\u7684\u662F\uFF1A\u8BE5\u4E8B\u4EF6\u89E6\u53D1\u987A\u5E8F\u5728 input \u4E8B\u4EF6\u4E4B\u540E\uFF0C\u6545\u800C\u9700\u8981\u5728\u6B64\u4E8B\u4EF6\u7684\u5904\u7406\u903B\u8F91\u91CC\u8C03\u7528\u4E00\u6B21 input \u91CC\u8FB9\u7684\u4E1A\u52A1\u903B\u8F91</p><h4 id="\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165" tabindex="-1">\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165 <a class="header-anchor" href="#\u7981\u6B62\u975E\u76F4\u63A5\u8F93\u5165" aria-hidden="true">#</a></h4><p>// \u6DFB\u52A0\u6807\u8BB0\u4F4D lock ,\u5F53\u7528\u6237\u672A\u8F93\u5165\u5B8C\u65F6\uFF0Clock \u4E3A true</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> lock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> inputEle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">inputEle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// input \u4E8B\u4EF6\u4E2D\u7684\u5904\u7406\u903B\u8F91, \u8FD9\u91CC\u4EC5\u4EC5\u6253\u5370\u6587\u672C</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> todo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">inputEle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">compositionstart</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">lock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">inputEle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">compositionend</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">lock</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// compositionend \u4E8B\u4EF6\u53D1\u751F\u5728 input \u4E4B\u540E\uFF0C\u6545\u6B64\u9700\u8981\u6B64\u5904\u8C03\u7528 input \u4E2D\u903B\u8F91</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">todo</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">inputEle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5FFD\u7565\u4E00\u5207\u975E\u76F4\u63A5\u8F93\u5165\uFF0C\u4E0D\u505A\u903B\u8F91\u5904\u7406</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">lock</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">todo</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+`" alt="alt \u5C5E\u6027\u6587\u672C"></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6B64\u65F6\u5DF2\u7ECF\u8FC7\u6EE4\u4E86\u5168\u90E8\u975E\u76F4\u63A5\u8F93\u5165\uFF0C\u53EA\u6709\u5F53\u7528\u6237\u8F93\u5165\u4E2D\u6587\u7ED3\u675F\u65F6\u624D\u4F1A\u89E6\u53D1 input \u4E2D\u7684\u4E1A\u52A1\u903B\u8F91 ~</p><h2 id="\u6A21\u7CCA\u5339\u914D\u67E5\u8BE2input" tabindex="-1">\u6A21\u7CCA\u5339\u914D\u67E5\u8BE2input <a class="header-anchor" href="#\u6A21\u7CCA\u5339\u914D\u67E5\u8BE2input" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    @focus=&quot;isForSearch = true&quot; </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">debounce</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">searchValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    @compositionstart=&quot;searchComposition = true&quot; </span></span>
<span class="line"><span style="color:#89DDFF;">    @compositionend=&quot;searchComposition = false&quot; </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF7\u8F93\u5165\u4E66\u540D</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">searchComposition</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nv</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">searchBooks</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">searchValue</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">searchBooks</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">searchBooks</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">searchValue</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">searchComposition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastSearchValue</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastSearchValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nv</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">searchValue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">searchList</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,44),c=[t];function r(F,D,y,i,A,C){return a(),n("div",null,c)}var h=s(e,[["render",r]]);export{d as __pageData,h as default};
