<template><h1 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h1>
<p><em>用于加载前</em></p>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-loading&gt;&lt;/cc-loading&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display: flex&quot;&gt;
    &lt;cc-loading type=&quot;effect&quot; /&gt;
    &lt;cc-loading type=&quot;line&quot; /&gt;
    &lt;cc-loading type=&quot;rect&quot; /&gt;
    &lt;cc-loading type=&quot;back&quot; /&gt;
    &lt;cc-loading type=&quot;backLine&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display: flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;effect&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;line&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;rect&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;back&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-loading</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;backLine&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="loading属性" tabindex="-1"><a class="header-anchor" href="#loading属性" aria-hidden="true">#</a> loading属性</h4>
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
<td>type</td>
<td style="text-align:center">类型</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>effect</code>,<code>line</code>,<code>rect</code>,<code>back</code>,<code>backLine</code></td>
<td style="text-align:right"><code>line</code></td>
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

function render(_ctx, _cache) {
  const _component_cc_loading = _resolveComponent("cc-loading")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_loading)
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
  const _component_cc_loading = _resolveComponent("cc-loading")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_loading, { type: "effect" }),
    _createVNode(_component_cc_loading, { type: "line" }),
    _createVNode(_component_cc_loading, { type: "rect" }),
    _createVNode(_component_cc_loading, { type: "back" }),
    _createVNode(_component_cc_loading, { type: "backLine" })
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