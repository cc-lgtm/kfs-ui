<template><h1 id="drawer" tabindex="-1"><a class="header-anchor" href="#drawer" aria-hidden="true">#</a> Drawer</h1>
<p><em>展示侧边数据</em></p>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div style=&quot;display:flex&quot;&gt;
    &lt;cc-button
      value=&quot;左&quot;
      @click=&quot;openleft&quot;
    /&gt;
    &lt;cc-button
      value=&quot;右&quot;
      @click=&quot;openright&quot;
    /&gt;
    &lt;cc-drawer
      :vModel=&quot;false&quot;
      :position=&quot;left&quot;
    /&gt;
    &lt;cc-drawer
      :vModel=&quot;false&quot;
      :position=&quot;right&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import {ref} from 'vue'
const left = ref&lt;boolean&gt;(false)
const right = ref&lt;boolean&gt;(false)
const openleft = () =&gt; {
  left.value = true
}
const openright = () =&gt; {
  right.value = true
}
&lt;/script&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">style</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;display:flex&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;左&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">openleft</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;右&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">openright</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-drawer</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">vModel</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">position</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">left</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-drawer</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">vModel</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">position</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">right</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> {ref} </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">left</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">&gt;(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">right</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">&gt;(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">openleft</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">left</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">openright</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">right</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
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
<td>vModel</td>
<td style="text-align:center">是否显示</td>
<td style="text-align:right"><code>boolean</code></td>
<td style="text-align:center"><code>true</code>,<code>false</code></td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td>position</td>
<td style="text-align:center">打开位置</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>left</code>,<code>right</code></td>
<td style="text-align:right"><code>right</code></td>
</tr>
<tr>
<td>width</td>
<td style="text-align:center">弹框大小</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>max-content</code></td>
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
<td>opened</td>
<td style="text-align:center">打开后触发</td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>closed</td>
<td style="text-align:center">关闭后触发</td>
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { style: {"display":"flex"} }

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")
  const _component_cc_drawer = _resolveComponent("cc-drawer")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cc_button, {
      value: "左",
      onClick: _ctx.openleft
    }, null, 8 /* PROPS */, ["onClick"]),
    _createVNode(_component_cc_button, {
      value: "右",
      onClick: _ctx.openright
    }, null, 8 /* PROPS */, ["onClick"]),
    _createVNode(_component_cc_drawer, {
      vModel: false,
      position: _ctx.left
    }, null, 8 /* PROPS */, ["position"]),
    _createVNode(_component_cc_drawer, {
      vModel: false,
      position: _ctx.right
    }, null, 8 /* PROPS */, ["position"])
  ]))
}
  
    const { defineComponent: _defineComponent } = Vue
const {ref} = Vue

const democomponentExport = /*#__PURE__*/_defineComponent({
  setup(__props, { expose }) {
  expose();

const left = ref<boolean>(false)
const right = ref<boolean>(false)
const openleft = () => {
  left.value = true
}
const openright = () => {
  right.value = true
}

const __returned__ = { left, right, openleft, openright, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style lang="scss"></style>