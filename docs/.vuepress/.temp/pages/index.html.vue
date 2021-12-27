<template><div style="margin: 10px auto">
  <cc-button value="起步" type="success" @click="goto" />
</div>
<blockquote>
<p>安装</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">npm i kfs-ui</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">yarn add kfs-ui</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>引用</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { createApp } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> App </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./App.vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> kfs-ui </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;kfs-ui/lib/index&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;kfs-ui/lib/index.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">app</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">createApp</span><span style="color: var(--shiki-color-text)">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">app</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.use</span><span style="color: var(--shiki-color-text)">(kfs</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-color-text)">ui)</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.mount</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;#app&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote>
<p>方法</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> cc-message </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;kfs-ui/lib/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">cc</span><span style="color: var(--shiki-token-keyword)">-</span><span style="color: var(--shiki-token-function)">message</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  type</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;...&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  text</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;...&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>

<script setup lang="ts">
const goto = () => {
  location.href = '/guide/button.html'
}
</script>
