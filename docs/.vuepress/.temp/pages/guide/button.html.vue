<template><h2 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h2>
<p><em>用于一个基础的操作</em></p>
<h4 id="不同类型" tabindex="-1"><a class="header-anchor" href="#不同类型" aria-hidden="true">#</a> 不同类型</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-button&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;success&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;warn&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;error&quot;&gt;&lt;/cc-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>属性来定义 Button 的类型。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warn&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-button disabled&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;success&quot; disabled value=&quot;success&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;warn&quot; disabled value=&quot;warn&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button type=&quot;error&quot; disabled value=&quot;error&quot;&gt;&lt;/cc-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        <template #description>
          <div>使用<code>disabled</code>属性禁用 Button。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warn&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warn&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="加载中" tabindex="-1"><a class="header-anchor" href="#加载中" aria-hidden="true">#</a> 加载中</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-button isLoading&gt;&lt;/cc-button&gt;
    &lt;cc-button :isLoading=&quot;isLoading&quot; @click=&quot;onClick&quot;&gt;&lt;/cc-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const isLoading = ref(false)
    const onClick = () =&gt; isLoading.value = true
    return {
      isLoading,
      onClick
    }
  }
})
&lt;/script&gt;
"><render-demo-2 />
        <template #description>
          <div>使用<code>isLoading</code>属性让 Button 加载。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">isLoading</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">isLoading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">isLoading</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">onClick</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { defineComponent</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> ref } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">defineComponent</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">(){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">isLoading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">onClick</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">isLoading</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      isLoading</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      onClick</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">})</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-button size=&quot;mini&quot; type=&quot;success&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button size=&quot;small&quot; type=&quot;warn&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button size=&quot;medium&quot; type=&quot;error&quot;&gt;&lt;/cc-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-3 />
        <template #description>
          <div>使用<code>size</code>属性来展示 Button 不同大小。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;mini&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;small&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warn&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;medium&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;error&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="圆形-角-按钮" tabindex="-1"><a class="header-anchor" href="#圆形-角-按钮" aria-hidden="true">#</a> 圆形(角)按钮</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-button circle type=&quot;success&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button round=&quot;10&quot; type=&quot;success&quot;&gt;&lt;/cc-button&gt;
    &lt;cc-button :round=&quot;20&quot; type=&quot;success&quot;&gt;&lt;/cc-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-4 />
        <template #description>
          <div>使用<code>size</code>属性来展示 Button 不同大小。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">circle</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;10&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">round</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">20</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
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
<td>class</td>
<td style="text-align:center">自定义按钮的样式类名</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>type</td>
<td style="text-align:center">按钮的类型</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>success</code>,<code>warn</code>,<code>error</code>,<code>defalut</code></td>
<td style="text-align:right"><code>defalut</code></td>
</tr>
<tr>
<td>size</td>
<td style="text-align:center">按钮的尺寸</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td>
<td style="text-align:right"><code>medium</code></td>
</tr>
<tr>
<td>circle</td>
<td style="text-align:center">是否圆形按钮</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td>disabled</td>
<td style="text-align:center">是否禁止点击</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td>isLoading</td>
<td style="text-align:center">是否开启加载</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td>round</td>
<td style="text-align:center">按钮的圆角</td>
<td style="text-align:right"><code>number</code>,<code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>0</code></td>
</tr>
</tbody>
</table>
<h4 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h4>
<table>
<thead>
<tr>
<th>名称</th>
<th style="text-align:center">描述</th>
<th style="text-align:right">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td style="text-align:center">按钮点击时触发</td>
<td style="text-align:right"><code>-</code></td>
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
<td style="text-align:center"><code>Button</code>内自定义内容</td>
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button),
    _createVNode(_component_cc_button, { type: "success" }),
    _createVNode(_component_cc_button, { type: "warn" }),
    _createVNode(_component_cc_button, { type: "error" })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button, { disabled: "" }),
    _createVNode(_component_cc_button, {
      type: "success",
      disabled: "",
      value: "success"
    }),
    _createVNode(_component_cc_button, {
      type: "warn",
      disabled: "",
      value: "warn"
    }),
    _createVNode(_component_cc_button, {
      type: "error",
      disabled: "",
      value: "error"
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button, { isLoading: "" }),
    _createVNode(_component_cc_button, {
      isLoading: _ctx.isLoading,
      onClick: _ctx.onClick
    }, null, 8 /* PROPS */, ["isLoading", "onClick"])
  ]))
}
  
    const { defineComponent, ref } = Vue
const democomponentExport = defineComponent({
  setup(){
    const isLoading = ref(false)
    const onClick = () => isLoading.value = true
    return {
      isLoading,
      onClick
    }
  }
})
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-3": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button, {
      size: "mini",
      type: "success"
    }),
    _createVNode(_component_cc_button, {
      size: "small",
      type: "warn"
    }),
    _createVNode(_component_cc_button, {
      size: "medium",
      type: "error"
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-4": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button, {
      circle: "",
      type: "success"
    }),
    _createVNode(_component_cc_button, {
      round: "10",
      type: "success"
    }),
    _createVNode(_component_cc_button, {
      round: 20,
      type: "success"
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
<style lang="scss"></style>