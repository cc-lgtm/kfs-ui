<template><blockquote>
<p>安装</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>npm i uninterest
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>引用</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> uninterest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uninterest'</span>
<span class="token keyword">import</span> <span class="token string">'uninterest/lib/uninterest.css'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>uninterest<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote>
<p>方法</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uninterest'</span>

<span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">'...'</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">'...'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>
