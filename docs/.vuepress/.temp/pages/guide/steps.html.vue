<template><h1 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h1>
<p><em>用于展示当前步骤</em></p>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-stepbar :active=&quot;1&quot; :space=&quot;100&quot;&gt;
      &lt;cc-stepitem /&gt;
      &lt;cc-stepitem /&gt;
      &lt;cc-stepitem /&gt;
      &lt;cc-stepitem /&gt;
    &lt;/cc-stepbar&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepbar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">active</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">space</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-stepbar</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="标题和描述" tabindex="-1"><a class="header-anchor" href="#标题和描述" aria-hidden="true">#</a> 标题和描述</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;height: 200px&quot;&gt;
    &lt;cc-stepbar :active=&quot;2&quot; :space=&quot;100&quot;&gt;
      &lt;cc-stepitem title=&quot;title1&quot; description=&quot;这是一条描述&quot; /&gt;
      &lt;cc-stepitem title=&quot;title2&quot; description=&quot;这是一条很长描述&quot; /&gt;
      &lt;cc-stepitem title=&quot;title3&quot; description=&quot;这是一条很长很长描述&quot; /&gt;
      &lt;cc-stepitem title=&quot;title4&quot; description=&quot;这是一条很长很长很长描述&quot; /&gt;
    &lt;/cc-stepbar&gt;
  &lt;/div&gt;
&lt;/template&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;height: 200px&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepbar</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">active</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">space</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;title1&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">description</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;这是一条描述&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;title2&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">description</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;这是一条很长描述&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;title3&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">description</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;这是一条很长很长描述&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-stepitem</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;title4&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">description</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;这是一条很长很长很长描述&quot;</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">cc-stepbar</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="steps属性" tabindex="-1"><a class="header-anchor" href="#steps属性" aria-hidden="true">#</a> steps属性</h4>
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
<td>space</td>
<td style="text-align:center">步骤间隔</td>
<td style="text-align:right"><code>string</code>,<code>number</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>direction</td>
<td style="text-align:center">布局</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>vertical</code>,<code>horizontal</code></td>
<td style="text-align:right"><code>horizontal</code></td>
</tr>
<tr>
<td>active</td>
<td style="text-align:center">当前步骤</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>processStatus</td>
<td style="text-align:center">过程状态</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>StepStatus</code></td>
<td style="text-align:right"><code>process</code></td>
</tr>
<tr>
<td>finishStatus</td>
<td style="text-align:center">完成状态</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>StepStatus</code></td>
<td style="text-align:right"><code>finish</code></td>
</tr>
</tbody>
</table>
<h4 id="类型描述" tabindex="-1"><a class="header-anchor" href="#类型描述" aria-hidden="true">#</a> 类型描述</h4>
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
<td>StepStatus</td>
<td style="text-align:center">步骤状态</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>wait</code>,<code>process</code>,<code>finish</code>,<code>error</code>,<code>success</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
</tbody>
</table>
<h4 id="step属性" tabindex="-1"><a class="header-anchor" href="#step属性" aria-hidden="true">#</a> step属性</h4>
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
<td>title</td>
<td style="text-align:center">步骤标题</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>description</td>
<td style="text-align:center">步骤描述</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>icon</td>
<td style="text-align:center">步骤图标</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
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
  const _component_cc_stepitem = _resolveComponent("cc-stepitem")
  const _component_cc_stepbar = _resolveComponent("cc-stepbar")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_stepbar, {
      active: 1,
      space: 100
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_stepitem),
        _createVNode(_component_cc_stepitem),
        _createVNode(_component_cc_stepitem),
        _createVNode(_component_cc_stepitem)
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

const _hoisted_1 = { style: {"height":"200px"} }

function render(_ctx, _cache) {
  const _component_cc_stepitem = _resolveComponent("cc-stepitem")
  const _component_cc_stepbar = _resolveComponent("cc-stepbar")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_stepbar, {
      active: 2,
      space: 100
    }, {
      default: _withCtx(() => [
        _createVNode(_component_cc_stepitem, {
          title: "title1",
          description: "这是一条描述"
        }),
        _createVNode(_component_cc_stepitem, {
          title: "title2",
          description: "这是一条很长描述"
        }),
        _createVNode(_component_cc_stepitem, {
          title: "title3",
          description: "这是一条很长很长描述"
        }),
        _createVNode(_component_cc_stepitem, {
          title: "title4",
          description: "这是一条很长很长很长描述"
        })
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