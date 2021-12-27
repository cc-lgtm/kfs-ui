<template><h1 id="skeleton" tabindex="-1"><a class="header-anchor" href="#skeleton" aria-hidden="true">#</a> Skeleton</h1>
<p><em>用于填充数据</em></p>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-skeleton :loading=&quot;true&quot;&gt;
      &lt;cc-skeleton-item type=&quot;text&quot;&gt;&lt;/cc-skeleton-item&gt;
    &lt;/cc-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;text&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="多行" tabindex="-1"><a class="header-anchor" href="#多行" aria-hidden="true">#</a> 多行</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-skeleton :loading=&quot;true&quot; :rows=3&gt;
    &lt;/cc-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">rows</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">3&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="设置长度" tabindex="-1"><a class="header-anchor" href="#设置长度" aria-hidden="true">#</a> 设置长度</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-skeleton :loading=&quot;true&quot; :rows=3 :rowsWidth=&quot;['200px','150px','100px']&quot;&gt;
    &lt;/cc-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-2 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">rows</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">3 </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">rowsWidth</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-string-expression)">&#39;200px&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string-expression)">&#39;150px&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-string-expression)">&#39;100px&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="其他类型" tabindex="-1"><a class="header-anchor" href="#其他类型" aria-hidden="true">#</a> 其他类型</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-skeleton :loading=&quot;true&quot;&gt;
      &lt;cc-skeleton-item type=&quot;rect&quot;&gt;&lt;/cc-skeleton-item&gt;
      &lt;cc-skeleton-item type=&quot;h&quot;&gt;&lt;/cc-skeleton-item&gt;
      &lt;cc-skeleton-item type=&quot;button&quot;&gt;&lt;/cc-skeleton-item&gt;
    &lt;/cc-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-3 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">loading</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;rect&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;h&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;button&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton-item</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-skeleton</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="skeleton属性" tabindex="-1"><a class="header-anchor" href="#skeleton属性" aria-hidden="true">#</a> skeleton属性</h4>
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
<td>rows</td>
<td style="text-align:center">渲染多行</td>
<td style="text-align:right"><code>number</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>0</code></td>
</tr>
<tr>
<td>rowsWidth</td>
<td style="text-align:center">渲染多行的宽度</td>
<td style="text-align:right"><code>string[]</code>,<code>number[]</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>loading</td>
<td style="text-align:center">是否显示</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
</tbody>
</table>
<h4 id="skeleton-item属性" tabindex="-1"><a class="header-anchor" href="#skeleton-item属性" aria-hidden="true">#</a> skeleton-item属性</h4>
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
<td>variable</td>
<td style="text-align:center">skeleton类型</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>variable-type</code></td>
<td style="text-align:right"><code>text</code></td>
</tr>
</tbody>
</table>
<h4 id="类型参考" tabindex="-1"><a class="header-anchor" href="#类型参考" aria-hidden="true">#</a> 类型参考</h4>
<table>
<thead>
<tr>
<th>类型</th>
<th style="text-align:left">可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>variable-type</td>
<td style="text-align:left"><code>p</code>,<code>text</code>,<code>h</code>,<code>rect</code>,<code>circle</code>,<code>image</code>,<code>button</code>,<code>caption</code></td>
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
  const _component_cc_skeleton_item = _resolveComponent("cc-skeleton-item")
  const _component_cc_skeleton = _resolveComponent("cc-skeleton")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_skeleton, { loading: true }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_skeleton_item, { type: "text" })
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_skeleton = _resolveComponent("cc-skeleton")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_skeleton, {
      loading: true,
      rows: 3
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

function render(_ctx, _cache) {
  const _component_cc_skeleton = _resolveComponent("cc-skeleton")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_skeleton, {
      loading: true,
      rows: 3,
      rowsWidth: ['200px','150px','100px']
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-3": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_skeleton_item = _resolveComponent("cc-skeleton-item")
  const _component_cc_skeleton = _resolveComponent("cc-skeleton")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_skeleton, { loading: true }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_skeleton_item, { type: "rect" }),
        _createVNode(_component_cc_skeleton_item, { type: "h" }),
        _createVNode(_component_cc_skeleton_item, { type: "button" })
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