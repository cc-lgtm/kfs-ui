<template><h1 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h1>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-pagination total=&quot;100&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-pagination</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;100&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-pagination total=&quot;100&quot; background /&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-pagination</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;100&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">background</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-pagination total=&quot;100&quot; background :layout=&quot;'prev, pager, next'&quot; /&gt;
    &lt;cc-pagination total=&quot;100&quot; background :layout=&quot;'jumper, prev, pager, next'&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-2 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-pagination</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;100&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">background</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">layout</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-string-expression)">&#39;prev, pager, next&#39;</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-pagination</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">total</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;100&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">background</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">layout</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-string-expression)">&#39;jumper, prev, pager, next&#39;</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
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
<td>nextText</td>
<td style="text-align:center">下一页文字</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>prevText</td>
<td style="text-align:center">上一页文字</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>total</td>
<td style="text-align:center">总数据量</td>
<td style="text-align:right"><code>number</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>pageSize</td>
<td style="text-align:center">每页显示多少数据</td>
<td style="text-align:right"><code>number</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>10</code></td>
</tr>
<tr>
<td>background</td>
<td style="text-align:center">是否显示背景</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td>currentPage</td>
<td style="text-align:center">当前的页数</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>1</code></td>
</tr>
<tr>
<td>layout</td>
<td style="text-align:center">布局</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>total</code>,<code>prev</code>,<code>pager</code>,<code>next</code>,<code>jumper</code></td>
<td style="text-align:right"><code>'total, prev, pager, next, jumper'</code></td>
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
<td>currentChange</td>
<td style="text-align:center">当前页数变化时触发</td>
<td style="text-align:right"><code>当前的值</code></td>
</tr>
<tr>
<td>prevClick</td>
<td style="text-align:center">点击上一页触发</td>
<td style="text-align:right"><code>当前的值</code></td>
</tr>
<tr>
<td>nextClick</td>
<td style="text-align:center">点击下一页触发</td>
<td style="text-align:right"><code>当前的值</code></td>
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
  const _component_cc_pagination = _resolveComponent("cc-pagination")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_pagination, { total: "100" })
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
  const _component_cc_pagination = _resolveComponent("cc-pagination")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_pagination, {
      total: "100",
      background: ""
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
  const _component_cc_pagination = _resolveComponent("cc-pagination")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_pagination, {
      total: "100",
      background: "",
      layout: 'prev, pager, next'
    }),
    _createVNode(_component_cc_pagination, {
      total: "100",
      background: "",
      layout: 'jumper, prev, pager, next'
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