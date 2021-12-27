<template><h1 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h1>
<p><em>用于跳转到指定地址</em></p>
<h4 id="不同类型" tabindex="-1"><a class="header-anchor" href="#不同类型" aria-hidden="true">#</a> 不同类型</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;cc-link&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;primary&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;success&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;warning&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;danger&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;info&quot;&gt;link&lt;/cc-link&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.box {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>属性来定义 Link 的类型。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;box&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.box</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">%</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">box-sizing</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">border-box</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">justify-content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">space-between</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="不带下划线" tabindex="-1"><a class="header-anchor" href="#不带下划线" aria-hidden="true">#</a> 不带下划线</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;cc-link :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;primary&quot; :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;success&quot; :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;warning&quot; :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;danger&quot; :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;info&quot; :underline=&quot;false&quot;&gt;link&lt;/cc-link&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.box {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
"><render-demo-1 />
        <template #description>
          <div>使用<code>underline</code>属性来定义 Link 的是否显示下划线。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;box&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">underline</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.box</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">%</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">box-sizing</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">border-box</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">justify-content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">space-between</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;cc-link disabled&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;primary&quot; disabled&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;success&quot; disabled&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;warning&quot; disabled&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;danger&quot; disabled&gt;link&lt;/cc-link&gt;
    &lt;cc-link type=&quot;info&quot; disabled&gt;link&lt;/cc-link&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.box {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
"><render-demo-2 />
        <template #description>
          <div>使用<code>disabled</code>属性来定义 Link 不可点击。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;box&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warning&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;danger&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;info&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.box</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">%</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">box-sizing</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">border-box</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">justify-content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">space-between</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;cc-link href=&quot;https://www.npmjs.com/package/kfs-ui&quot; type=&quot;success&quot;&gt;link&lt;/cc-link&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.box {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
"><render-demo-3 />
        <template #description>
          <div>使用<code>href</code>属性来定义 Link 跳转连接。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;box&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">href</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;https://www.npmjs.com/package/kfs-ui&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;link&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-link</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">.box</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">50</span><span style="color: var(--shiki-token-keyword)">%</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">box-sizing</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">border-box</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">justify-content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">space-between</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<table>
<thead>
<tr>
<th>属性</th>
<th style="text-align:center">描述</th>
<th style="text-align:right">类型</th>
<th style="text-align:center">可选值</th>
<th style="text-align:right">默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>underline</td>
<td style="text-align:center">是否带下划线</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td>type</td>
<td style="text-align:center">按钮的类型</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>default</code>,<code>primary</code>,<code>success</code>,<code>warning</code>,<code>danger</code>,<code>info</code></td>
<td style="text-align:right"><code>default</code></td>
</tr>
<tr>
<td>href</td>
<td style="text-align:center">跳转的地址</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>disabled</td>
<td style="text-align:center">是否禁止点击</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
</tbody>
</table>
<h4 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h4>
<table>
<thead>
<tr>
<th>名称</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>-</code></td>
<td style="text-align:center"><code>Link</code>内自定义内容</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "box" }
const _hoisted_2 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("link")

function render(_ctx, _cache) {
  const _component_cc_link = _resolveComponent("cc-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_link, null, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, { type: "success" }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, { type: "warning" }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, { type: "danger" }, {
      default: _withCtx(() => [
        _hoisted_6
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, { type: "info" }, {
      default: _withCtx(() => [
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "box" }
const _hoisted_2 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("link")

function render(_ctx, _cache) {
  const _component_cc_link = _resolveComponent("cc-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_link, { underline: false }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "primary",
      underline: false
    }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "success",
      underline: false
    }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "warning",
      underline: false
    }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "danger",
      underline: false
    }, {
      default: _withCtx(() => [
        _hoisted_6
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "info",
      underline: false
    }, {
      default: _withCtx(() => [
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "box" }
const _hoisted_2 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("link")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("link")

function render(_ctx, _cache) {
  const _component_cc_link = _resolveComponent("cc-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_link, { disabled: "" }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "primary",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "success",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "warning",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "danger",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_6
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_link, {
      type: "info",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_7
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-3": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "box" }
const _hoisted_2 = /*#__PURE__*/_createTextVNode("link")

function render(_ctx, _cache) {
  const _component_cc_link = _resolveComponent("cc-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_link, {
      href: "https://www.npmjs.com/package/kfs-ui",
      type: "success"
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style lang="scss">.box {
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}</style>