import{_ as a,o as e,c as s,a as n}from"./app.9b962d41.js";const i={},r=n(`<h1 id="\u524D\u7AEF\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5B89\u5168" aria-hidden="true">#</a> \u524D\u7AEF\u5B89\u5168</h1><h1 id="\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u6027\u80FD\u4F18\u5316</h1><ul><li>cdn\uFF08\u9759\u6001\u8D44\u6E90\u5B58\u653E\uFF09\u7F13\u5B58 cdn\u9884\u70ED\uFF08\u53EF\u9047\u89C1\u7684\u6D3B\u52A8\uFF0C\u6BD4\u5982\u54EA\u4E2A\u8DEF\u5F84\u8D44\u6E90\u9700\u8981\u63D0\u524D\u9884\u70ED\uFF09\uFF1A\u63D0\u524D\u8BA9cdn\u6CA1\u6709\u7ECF\u8FC7\u7528\u6237\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u62C9\u53D6\u539F\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u505A\u4E00\u4EFD\u7F13\u5B58\u3002</li><li>cdn\u5237\u65B0\u673A\u5236</li></ul><h2 id="xss-cross-site-scripting-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#xss-cross-site-scripting-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB" aria-hidden="true">#</a> XSS \uFF08cross-site scripting\uFF0C\u8DE8\u7AD9\u811A\u672C\u653B\u51FB</h2><p>\u653B\u51FB\u8005\u60F3\u5C3D\u4E00\u5207\u529E\u6CD5\u628A\u6076\u610F\u4EE3\u7801\u6CE8\u5165\u5230\u7F51\u9875\u4E2D</p><h3 id="\u5916\u5728\u8868\u73B0\u4E0A-\u6709\u54EA\u4E9B\u653B\u51FB\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5916\u5728\u8868\u73B0\u4E0A-\u6709\u54EA\u4E9B\u653B\u51FB\u573A\u666F" aria-hidden="true">#</a> \u5916\u5728\u8868\u73B0\u4E0A\uFF0C\u6709\u54EA\u4E9B\u653B\u51FB\u573A\u666F\uFF1F</h3><ol><li>\u53EF\u8F93\u5165\u5230\u5730\u65B9\u690D\u5165js\u4EE3\u7801\uFF08\u8BC4\u8BBA\u533A\u7B49\uFF09\u5B58\u50A8\u578B</li><li>url\u4E0A\u62FC\u63A5js\u4EE3\u7801</li></ol><h3 id="\u6280\u672F\u89D2\u5EA6\u4E0A-\u6709\u54EA\u4E9B\u7C7B\u578B\u7684\u653B\u51FB-\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u89D2\u5EA6\u4E0A-\u6709\u54EA\u4E9B\u7C7B\u578B\u7684\u653B\u51FB-\u5206\u7C7B" aria-hidden="true">#</a> \u6280\u672F\u89D2\u5EA6\u4E0A\uFF0C\u6709\u54EA\u4E9B\u7C7B\u578B\u7684\u653B\u51FB\uFF08\u5206\u7C7B\uFF09\uFF1F</h3><ol><li>\u5B58\u50A8\u578B server \uFF08\u6301\u4E45\u578B\uFF09 \u8BBA\u575B\u53D1\u5E16\uFF0C\u5546\u54C1\u8BC4\u4EF7\uFF0C\u7528\u6237\u79C1\u4FE1\u7B49\u7528\u6237\u4FDD\u5B58\u6570\u636E\u7684\u7F51\u7AD9</li></ol><ul><li>\u653B\u51FB\u6B65\u9AA4\uFF1A <ul><li>\u653B\u51FB\u8005\u5C06\u6076\u610F\u4EE3\u7801\u63D0\u4EA4\u5230\u76EE\u6807\u7F51\u7AD9\u7684\u6570\u636E\u5E93\u4E2D</li><li>\u7528\u6237\u6253\u5F00\u76EE\u6807\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5C06\u8BC4\u8BBA\uFF08\u6076\u610F\u4EE3\u7801\uFF09\u4ECE\u6570\u636E\u5E93\u53D6\u51FA\uFF0C\u8FD4\u56DE\u5230\u6D4F\u89C8\u5668</li><li>\u7528\u6237\u6D4F\u89C8\u5668\u6536\u5230html\u540E\uFF0C\u6DF7\u5728\u5176\u4E2D\u7684\u6076\u610F\u4EE3\u7801\u5C31\u4F1A\u88AB\u6267\u884C</li><li>\u7A83\u53D6\u7528\u6237\u6570\u636E\uFF0C\u53D1\u9001\u5230\u653B\u51FB\u8005\u7F51\u7AD9</li></ul></li></ul><ol start="2"><li>\u53CD\u5C04\u578B Server \uFF08\u975E\u6301\u4E45\uFF09</li></ol><p>\u653B\u51FB\u8005\u7ED3\u5408\u5404\u79CD\u624B\u6BB5\uFF0C\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u6076\u610Furl\u3002\u901A\u8FC7url\u4F20\u53C2\u6570\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u7F51\u7AD9\u7684\u641C\u7D22\u6216\u8005\u8DF3\u8F6C</p><ul><li>\u653B\u51FB\u6B65\u9AA4\uFF1A <ul><li>\u653B\u51FB\u8005\u6784\u9020\u81EA\u5DF1\u6076\u610F\u7684url</li><li>\u76F4\u63A5\u6267\u884C\u53EF\u6267\u884C\u7684\u6076\u610F\u4EE3\u7801</li></ul></li></ul><ol start="3"><li>Dom\u578B Browser\u6D4F\u89C8\u5668\u7AEF</li></ol><p>\u53D6\u51FA\u548C\u6267\u884C\u6076\u610F\u4EE3\u7801\u7684\u64CD\u4F5C\uFF0C\u7531\u6D4F\u89C8\u5668\u5B8C\u6210\uFF0C\u5728\u5730\u5740\u680F\u8F93\u5165javascript\u4EE3\u7801 xss-demo\u7F51\u5740\uFF1Aalf.nu/alert1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> search<span class="token operator">=</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">;</span>
a<span class="token punctuation">.</span>href<span class="token operator">=</span>queryObject<span class="token punctuation">.</span>redirectUrl

<span class="token comment">//\u6BD4\u5982\u5728\u5730\u5740\u680F\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801 1\uFF1A00</span>
<span class="token keyword">var</span> script<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\u2019script\u2019<span class="token punctuation">)</span>
script<span class="token operator">=</span>type<span class="token operator">=</span>\u2018text<span class="token operator">/</span>javascript\u2019
scrpt<span class="token punctuation">.</span>async<span class="token operator">=</span><span class="token boolean">true</span>
script<span class="token punctuation">.</span>src<span class="token operator">=</span>\u2018remote<span class="token punctuation">.</span>js\u2019<span class="token comment">//\u653B\u51FB\u8005\u7684\u6076\u610F\u4EE3\u7801</span>
<span class="token keyword">var</span> s<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementByTagName</span><span class="token punctuation">(</span>\u2019script\u2019<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
s<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>script<span class="token punctuation">,</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u653B\u51FB\u6B65\u9AA4\uFF1A</p><ul><li>url\u53C2\u6570</li></ul><h3 id="\u9632\u8303xss\u653B\u51FB\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9632\u8303xss\u653B\u51FB\u65B9\u6CD5" aria-hidden="true">#</a> \u9632\u8303xss\u653B\u51FB\u65B9\u6CD5\uFF1F</h3><p>\u4E3B\u65E8\uFF1A\u9632\u6B62\u653B\u51FB\u8005\u63D0\u4EA4\u6076\u610F\u4EE3\u7801\uFF0C\u9632\u6B62\u6D4F\u89C8\u5668\u6267\u884C\u6076\u610F\u4EE3\u7801</p><ol><li>\u8F6C\u8BD1\u7528\u6237\u5185\u5BB9\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u4E25\u683C\u7684\u8F93\u5165\u7F16\u7801\uFF0C\u6BD4\u5982html\u5143\u7D20\uFF0Cjs\uFF0Ccss\uFF0Curl vue html react dangerouslyHtml</li><li>CSP Content Security Policy <ul><li>default-src \u2018self\u2018 \u6240\u6709\u52A0\u8F7D\u7684\u5185\u5BB9\u5FC5\u987B\u6765\u81EA\u7AD9\u70B9\u540C\u4E00\u4E2A\u6E90\uFF08\u6709\u53EF\u4FE1\u7684\u57DF\u540D\u5728\u540E\u9762\u2795 *xxx.com</li></ul></li><li>\u8F93\u5165\u9A8C\u8BC1\uFF0C\u4E25\u683C\u7684\u6570\u636E\u6821\u9A8C</li><li>\u5F00\u542F\u6D4F\u89C8\u5668\u7684xss\u9632\u5FA1\uFF1A\u5F00\u542Fhttp Only Cookie</li><li>\u9A8C\u8BC1\u7801</li></ol><h2 id="csrf-\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020" tabindex="-1"><a class="header-anchor" href="#csrf-\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020" aria-hidden="true">#</a> CSRF \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</h2><p>corss-site request forgery</p><h3 id="\u653B\u51FB\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u653B\u51FB\u6B65\u9AA4" aria-hidden="true">#</a> \u653B\u51FB\u6B65\u9AA4</h3><ol><li>\u53D7\u5BB3\u8005\u767B\u5F55 a.com \u5E76\u4E14\u4FDD\u7559\u4E86\u767B\u5F55\u51ED\u8BC1cookie</li><li>\u653B\u51FB\u8005\u8BF1\u5BFC\u7528\u6237\u8BBF\u95EE\u53E6\u4E00\u4E2A\u7F51\u7AD9 b.com\uFF0C\u5982\u679C\u6CA1\u5B89\u5168\u7B56\u7565\u9650\u5236.</li><li>b.com \u5411 a.com \u53D1\u9001\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5E26\u4E0A a.com \u7684cookie</li><li>\u653B\u51FB\u8005\u5728\u7528\u6237\u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\uFF0C\u5192\u5145\u7528\u6237\u5728 a.com \u6267\u884C\u4E86\u81EA\u5B9A\u4E49\u64CD\u4F5C</li></ol><h3 id="\u653B\u51FB\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u653B\u51FB\u7C7B\u578B" aria-hidden="true">#</a> \u653B\u51FB\u7C7B\u578B</h3><h5 id="get\u578B-\u5728\u9875\u9762\u4E2D\u7684\u67D0\u4E2Aimg\u53D1\u8D77\u4E00\u4E2Aget\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#get\u578B-\u5728\u9875\u9762\u4E2D\u7684\u67D0\u4E2Aimg\u53D1\u8D77\u4E00\u4E2Aget\u8BF7\u6C42" aria-hidden="true">#</a> get\u578B \uFF1A\u5728\u9875\u9762\u4E2D\u7684\u67D0\u4E2Aimg\u53D1\u8D77\u4E00\u4E2Aget\u8BF7\u6C42</h5><h5 id="post\u578B-\u81EA\u52A8\u63D0\u4EA4\u8868\u5355\u5230\u6076\u610F\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#post\u578B-\u81EA\u52A8\u63D0\u4EA4\u8868\u5355\u5230\u6076\u610F\u7F51\u7AD9" aria-hidden="true">#</a> post\u578B\uFF1A\u81EA\u52A8\u63D0\u4EA4\u8868\u5355\u5230\u6076\u610F\u7F51\u7AD9</h5><h5 id="\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u94FE\u63A5" aria-hidden="true">#</a> \u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u94FE\u63A5</h5><h3 id="\u9632\u8303\u65B9\u6CD5-csrf" tabindex="-1"><a class="header-anchor" href="#\u9632\u8303\u65B9\u6CD5-csrf" aria-hidden="true">#</a> \u9632\u8303\u65B9\u6CD5-csrf</h3><p>csrf\u4E00\u822C\u90FD\u662F\u53D1\u751F\u5728\u7B2C\u4E09\u65B9\u57DF\u540D\uFF0C\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u53D6\u5230cookie\u4FE1\u606F\u7684\u3002</p><ol><li>\u540C\u6E90\u68C0\u6D4B</li><li>cookie SamSite \u63A7\u5236cookie\u7B56\u7565 <ul><li>strict\u5C5E\u6027\uFF1A\u5B8C\u5168\u7981\u7528\u7B2C\u4E09\u65B9cookie</li><li>Lax\uFF1Apost img iframe \u4E0D\u4F1A\u643A\u5E26cookie</li><li>None:\u4E0D\u8BBE\u7F6E</li></ul></li><li><h5 id="\u63D0\u4EA4\u8BF7\u6C42\u7684\u65F6\u5019\u9644\u52A0\u989D\u5916\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u8BF7\u6C42\u7684\u65F6\u5019\u9644\u52A0\u989D\u5916\u4FE1\u606F" aria-hidden="true">#</a> \u63D0\u4EA4\u8BF7\u6C42\u7684\u65F6\u5019\u9644\u52A0\u989D\u5916\u4FE1\u606F</h5><ol><li>csrf token <ul><li>\u7528\u6237\u6BCF\u6B21\u6253\u5F00\u9875\u9762\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5229\u7528\u673A\u5BC6\u7B97\u6CD5\u751F\u6210token</li><li>\u6BCF\u6B21\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u524D\u7AEF\u628A\u83B7\u53D6\u5230\u7684token\uFF0C\u5728\u8BF7\u6C42\u65F6\u5019\u643A\u5E26token</li><li>\u670D\u52A1\u7AEF\u6BCF\u6B21\u63A5\u53D7\u8BF7\u6C42\u540E\uFF0C\u8FDB\u884C\u6821\u9A8Ctoken</li></ul></li><li>\u53CC\u91CDcookie <ul><li>\u7528\u6237\u5728\u8BBF\u95EE\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5411\u6D4F\u89C8\u5668\u6CE8\u5165\u4E00\u4E2A\u989D\u5916\u7684cookie</li><li>\u6BCF\u6B21\u53D1\u9001\u8BF7\u6C42\uFF0C\u62FC\u4E0A\u53BB\uFF0C\u670D\u52A1\u7AEF\u5728\u68C0\u9A8C</li><li><h5 id="\u4EE5\u4E0A\u8FD9\u4E48\u505Acookie\u80AF\u5B9A\u4E0D\u662Fhttp-only-\u4E00\u65E6\u906D\u53D7css\u653B\u51FB-cookie\u88AB\u7A83\u53D6\u5230-\u5373\u51C9\u51C9\u3002" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4E0A\u8FD9\u4E48\u505Acookie\u80AF\u5B9A\u4E0D\u662Fhttp-only-\u4E00\u65E6\u906D\u53D7css\u653B\u51FB-cookie\u88AB\u7A83\u53D6\u5230-\u5373\u51C9\u51C9\u3002" aria-hidden="true">#</a> \u4EE5\u4E0A\u8FD9\u4E48\u505Acookie\u80AF\u5B9A\u4E0D\u662Fhttp only\uFF0C\u4E00\u65E6\u906D\u53D7css\u653B\u51FB\uFF0Ccookie\u88AB\u7A83\u53D6\u5230\uFF0C\u5373\u51C9\u51C9\u3002</h5></li></ul></li></ol></li></ol><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><h2 id="csp" tabindex="-1"><a class="header-anchor" href="#csp" aria-hidden="true">#</a> CSP</h2><p>\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF0C\u53EF\u4EE5\u7981\u6B62\u52A0\u8F7D\u5916\u57DF\u7684\u4EE3\u7801\uFF0C\u7981\u6B62\u5916\u57DF\u7684\u63D0\u4EA4</p><h2 id="hsts" tabindex="-1"><a class="header-anchor" href="#hsts" aria-hidden="true">#</a> HSTS</h2><p>\u5F3A\u5236\u5BA2\u6237\u7AEF\u4F7F\u7528https\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5</p><h2 id="x-frame-options" tabindex="-1"><a class="header-anchor" href="#x-frame-options" aria-hidden="true">#</a> X-Frame-Options</h2><p>\u63A7\u5236\u5F53\u524D\u9875\u9762\u662F\u5426\u88AB\u5D4C\u5165\u5230iframe\u4E2D</p><h2 id="sri-subresouce-intergrity-\u5B50\u8D44\u6E90\u7684\u5B8C\u6574\u6027-\u4F20\u5230\u670D\u52A1\u5668\u6216cdn\u4E0A\u7684\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#sri-subresouce-intergrity-\u5B50\u8D44\u6E90\u7684\u5B8C\u6574\u6027-\u4F20\u5230\u670D\u52A1\u5668\u6216cdn\u4E0A\u7684\u8D44\u6E90" aria-hidden="true">#</a> SRI \uFF08subresouce intergrity \u5B50\u8D44\u6E90\u7684\u5B8C\u6574\u6027\uFF0C\u4F20\u5230\u670D\u52A1\u5668\u6216cdn\u4E0A\u7684\u8D44\u6E90</h2><pre><code>1. xxx.js \u6CE8\u5165\u5230index.js \uFF0C\u5E76\u4E14\u4E0A\u4F20\u5230cdn
2. \u7528\u6237\u5728\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u6839\u636Exxx.js,\u53BB\u8BF7\u6C42\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6587\u4EF6\u53EF\u80FD\u88AB\u7BE1\u6539
3. \u6253\u5305\u7684\u65F6\u5019\u6839\u636Ejs\u6587\u4EF6\u751F\u4EA7\u4E00\u4E2Ahash\u503C\uFF0C\u5E76\u4E14\u628Ahash\u4F5C\u4E3Aintergrity\u5C5E\u6027\u6CE8\u5165\u5230script\u4E0A
4. \u5F53\u6D4F\u89C8\u5668\u5728\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u62FF\u5230\u8FD9\u4E2A\u6587\u4EF6\u505Ahash\uFF0C\u505A\u5BF9\u6BD4\uFF0C\u4E0D\u4E00\u6837\uFF0C\u5219\u4E0D\u5B89\u5168\u3002
</code></pre><h2 id="referer-policy-\u63A7\u5236referer\u7684\u643A\u5E26\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#referer-policy-\u63A7\u5236referer\u7684\u643A\u5E26\u7B56\u7565" aria-hidden="true">#</a> Referer-Policy\uFF08\u63A7\u5236referer\u7684\u643A\u5E26\u7B56\u7565\uFF09</h2><h2 id="node-\u670D\u52A1\u7AEF-\u76F8\u5173\u7684\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#node-\u670D\u52A1\u7AEF-\u76F8\u5173\u7684\u5B89\u5168" aria-hidden="true">#</a> Node\uFF08\u670D\u52A1\u7AEF\uFF09\u76F8\u5173\u7684\u5B89\u5168\uFF1A</h2><h3 id="\u672C\u5730\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173-\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173-\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u672C\u5730\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173\uFF0C\u9759\u6001\u8D44\u6E90</h3><p>\u6BD4\u5982\u63D0\u4F9B\u4E00\u4E2A\u9759\u6001\u670D\u52A1\uFF0C\u901A\u8FC7\u8BF7\u6C42url\u53C2\u6570\u6765\u8FD4\u56DE\u7528\u6237\u8981\u7684\u6570\u636E\uFF0C\u653B\u51FB\u8005\u901A\u8FC7\u8BF7\u6C42\u53C2\u6570\u8F93\u5165\u5947\u602A\u7684\u8DEF\u5F84 \u6BD4\u5982\uFF1Alocalhost\uFF1A8080/?/../../text.js\u6765\u67E5\u770B\u672C\u4E0D\u5E94\u8BE5\u770B\u5230\u7684\u6587\u4EF6</p><ul><li>express.static</li><li>koa-static</li><li>resolve-path</li></ul><h3 id="redos-\u6B63\u5219\u8868\u8FBE\u5F0F\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#redos-\u6B63\u5219\u8868\u8FBE\u5F0F\u653B\u51FB" aria-hidden="true">#</a> ReDos \u6B63\u5219\u8868\u8FBE\u5F0F\u653B\u51FB</h3><p>\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u56DE\u6EAF\u7279\u70B9\uFF0C\u6BCF\u5F53\u4E00\u6B21\u5339\u914D\u4E0D\u6210\uFF0C\u5C31\u4F1A\u5C1D\u8BD5\u56DE\u6EAF\u5230\u4E0A\u4E00\u4E2A\u5B57\u7B26\uFF0C\u6765\u9A8C\u8BC1\u80FD\u4E0D\u80FD\u6709\u5176\u4ED6\u7EC4\u5408\u6765\u5339\u914D\u8FD9\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F1A\u8D70\u5F88\u591A\u6B65\uFF0C\u5360\u7528\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u9020\u6210\u5B95\u673A\u3002</p><p>\u6D4B\u8BD5\u7F51\u7AD9\uFF1A regex.rip</p><h3 id="\u65F6\u5E8F\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u65F6\u5E8F\u653B\u51FB" aria-hidden="true">#</a> \u65F6\u5E8F\u653B\u51FB</h3><p>\u653B\u51FB\u8005\u901A\u8FC7\u4E0D\u505C\u5C1D\u8BD5\uFF0C\u5927\u91CF\u63A8\u65AD\uFF0C\u5927\u91CF\u5206\u6790\u4EE3\u7801\u6267\u884C\u6267\u884C\u6765\u63A8\u5BFC\u51FA\u4ED6\u60F3\u77E5\u9053\u7684\u5BC6\u7801\u6216\u4FE1\u606F\u3002</p><h3 id="ip-origin-referrer-request-headers\u6821\u9A8C-\u9632\u6B62\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#ip-origin-referrer-request-headers\u6821\u9A8C-\u9632\u6B62\u722C\u866B" aria-hidden="true">#</a> ip origin || referrer || request headers\u6821\u9A8C\uFF08\u9632\u6B62\u722C\u866B\uFF09</h3><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u622A\u56FE\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u622A\u56FE\u670D\u52A1" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u622A\u56FE\u670D\u52A1</h3><p>node\u4E2D\u7684\uFF1Apuppeter-chromium-resolver</p>`,54),t=[r];function l(o,c){return e(),s("div",null,t)}var h=a(i,[["render",l],["__file","index.html.vue"]]);export{h as default};