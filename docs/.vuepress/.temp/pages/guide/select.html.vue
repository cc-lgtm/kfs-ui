<template><h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h1>
<p><em>用于一组数据的选择</em></p>
<h4 id="普通的" tabindex="-1"><a class="header-anchor" href="#普通的" aria-hidden="true">#</a> 普通的</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-select placeholder=&quot;select&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-select placeholder=&quot;select1&quot; disabled&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
    &lt;cc-select placeholder=&quot;select2&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; disabled /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        <template #description>
          <div>使用<code>disabled</code>属性禁用 select。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select1&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select2&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-select placeholder=&quot;select1&quot; disabled size=&quot;mini&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
    &lt;cc-select placeholder=&quot;select2&quot; size=&quot;small&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; disabled /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
    &lt;cc-select placeholder=&quot;select3&quot; disabled size=&quot;medium&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
    &lt;cc-select placeholder=&quot;select4&quot; size=&quot;large&quot;&gt;
      &lt;cc-option label=&quot;js&quot; /&gt;
      &lt;cc-option label=&quot;css&quot; disabled /&gt;
      &lt;cc-option label=&quot;html&quot; /&gt;
    &lt;/cc-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-2 />
        <template #description>
          <div>使用<code>size</code>属性来展示 Button 不同大小。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select1&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;mini&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select2&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;small&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select3&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;medium&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">placeholder</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;select4&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">size</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;large&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;js&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;css&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">disabled</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-option</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">label</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;html&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-select</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="select属性" tabindex="-1"><a class="header-anchor" href="#select属性" aria-hidden="true">#</a> select属性</h4>
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
<td>modelValue</td>
<td style="text-align:center">绑定值</td>
<td style="text-align:right"><code>string</code>,<code>string[]</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>placeholder</td>
<td style="text-align:center">placeholder</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>请输入</code></td>
</tr>
<tr>
<td>size</td>
<td style="text-align:center">按钮的尺寸</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>mini</code>,<code>small</code>,<code>medium</code>,<code>large</code></td>
<td style="text-align:right"><code>medium</code></td>
</tr>
<tr>
<td>disabled</td>
<td style="text-align:center">是否禁止使用</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
</tbody>
</table>
<h4 id="option属性" tabindex="-1"><a class="header-anchor" href="#option属性" aria-hidden="true">#</a> option属性</h4>
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
<td>value</td>
<td style="text-align:center">选项唯一值</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>label</td>
<td style="text-align:center">选项的文字</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>disabled</td>
<td style="text-align:center">是否禁止使用</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
</tbody>
</table>
<h4 id="select事件" tabindex="-1"><a class="header-anchor" href="#select事件" aria-hidden="true">#</a> select事件</h4>
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
<td>change</td>
<td style="text-align:center">选择时触发</td>
<td style="text-align:right"><code>当前值</code></td>
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_option = _resolveComponent("cc-option")
  const _component_cc_select = _resolveComponent("cc-select")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_select, { placeholder: "select" }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, { label: "css" }),
        _createVNode(_component_cc_option, { label: "html" })
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_option = _resolveComponent("cc-option")
  const _component_cc_select = _resolveComponent("cc-select")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_select, {
      placeholder: "select1",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, { label: "css" }),
        _createVNode(_component_cc_option, { label: "html" })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_select, { placeholder: "select2" }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, {
          label: "css",
          disabled: ""
        }),
        _createVNode(_component_cc_option, { label: "html" })
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_option = _resolveComponent("cc-option")
  const _component_cc_select = _resolveComponent("cc-select")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_select, {
      placeholder: "select1",
      disabled: "",
      size: "mini"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, { label: "css" }),
        _createVNode(_component_cc_option, { label: "html" })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_select, {
      placeholder: "select2",
      size: "small"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, {
          label: "css",
          disabled: ""
        }),
        _createVNode(_component_cc_option, { label: "html" })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_select, {
      placeholder: "select3",
      disabled: "",
      size: "medium"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, { label: "css" }),
        _createVNode(_component_cc_option, { label: "html" })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cc_select, {
      placeholder: "select4",
      size: "large"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_option, { label: "js" }),
        _createVNode(_component_cc_option, {
          label: "css",
          disabled: ""
        }),
        _createVNode(_component_cc_option, { label: "html" })
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
<style lang="scss"></style>