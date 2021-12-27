<template><h1 id="popup" tabindex="-1"><a class="header-anchor" href="#popup" aria-hidden="true">#</a> Popup</h1>
<p><em>用于提示用户输入</em></p>
<h4 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-button
      value=&quot;点我一下&quot;
      @click=&quot;onClick&quot;
    /&gt;
    &lt;cc-popup
      v-if=&quot;popupStatus&quot;
      type=&quot;confirm&quot;
      title=&quot;提示&quot;
      content=&quot;我是一个提示&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import {ref} from 'vue'
const popupStatus = ref&lt;boolean&gt;(false)
const onClick = () =&gt; {
  popupStatus.value = !popupStatus.value
}
&lt;/script&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;点我一下&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">onClick</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-popup</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">v-if</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">popupStatus</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;confirm&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">content</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;我是一个提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> {ref} </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">&gt;(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">onClick</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">!</span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-button
      type=&quot;success&quot;
      value=&quot;点我一下&quot;
      @click=&quot;onClick&quot;
    /&gt;
    &lt;cc-popup
      v-if=&quot;popupStatus&quot;
      type=&quot;upload&quot;
      title=&quot;提示&quot;
      content=&quot;我是一个提示&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import {ref} from 'vue'
const popupStatus = ref&lt;boolean&gt;(false)
const onClick = () =&gt; {
  popupStatus.value = !popupStatus.value
}
&lt;/script&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;success&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;点我一下&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">onClick</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-popup</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">v-if</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">popupStatus</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;upload&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">content</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;我是一个提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> {ref} </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">&gt;(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">onClick</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">!</span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h4 id="消息" tabindex="-1"><a class="header-anchor" href="#消息" aria-hidden="true">#</a> 消息</h4>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;div&gt;
    &lt;cc-button
      type=&quot;warn&quot;
      value=&quot;点我一下&quot;
      @click=&quot;onClick&quot;
    /&gt;
    &lt;cc-popup
      v-if=&quot;popupStatus&quot;
      type=&quot;message&quot;
      title=&quot;提示&quot;
      content=&quot;我是一个提示&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import {ref} from 'vue'
const popupStatus = ref&lt;boolean&gt;(false)
const onClick = () =&gt; {
  popupStatus.value = !popupStatus.value
}
&lt;/script&gt;
"><render-demo-2 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-button</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;warn&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">value</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;点我一下&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">onClick</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">cc-popup</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">v-if</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">popupStatus</span><span style="color: var(--shiki-color-text)">&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;message&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-function)">content</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;我是一个提示&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> {ref} </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ref</span><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-constant)">boolean</span><span style="color: var(--shiki-color-text)">&gt;(</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">onClick</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">!</span><span style="color: var(--shiki-token-constant)">popupStatus</span><span style="color: var(--shiki-color-text)">.value</span></span>
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
<td>title</td>
<td style="text-align:center">提示框的名字</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>type</td>
<td style="text-align:center">提示框的类型</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>message</code>,<code>confirm</code>,<code>upload</code></td>
<td style="text-align:right"><code>upload</code></td>
</tr>
<tr>
<td>content</td>
<td style="text-align:center">提示框的内容</td>
<td style="text-align:right"><code>string</code></td>
<td style="text-align:center"><code>-</code></td>
<td style="text-align:right">`-</td>
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
<td>close</td>
<td style="text-align:center">弹框关闭时触发</td>
<td style="text-align:right"><code>-</code></td>
</tr>
<tr>
<td>confirm</td>
<td style="text-align:center">弹框确认时触发</td>
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
<td style="text-align:center"><code>Popup</code>内自定义内容</td>
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
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")
  const _component_cc_popup = _resolveComponent("cc-popup")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_button, {
      value: "点我一下",
      onClick: _ctx.onClick
    }, null, 8 /* PROPS */, ["onClick"]),
    (_ctx.popupStatus)
      ? (_openBlock(), _createBlock(_component_cc_popup, {
          key: 0,
          type: "confirm",
          title: "提示",
          content: "我是一个提示"
        }))
      : _createCommentVNode("v-if", true)
  ]))
}
  
    const { defineComponent: _defineComponent } = Vue
const {ref} = Vue

const democomponentExport = /*#__PURE__*/_defineComponent({
  setup(__props, { expose }) {
  expose();

const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}

const __returned__ = { popupStatus, onClick, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")
  const _component_cc_popup = _resolveComponent("cc-popup")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_button, {
      type: "success",
      value: "点我一下",
      onClick: _ctx.onClick
    }, null, 8 /* PROPS */, ["onClick"]),
    (_ctx.popupStatus)
      ? (_openBlock(), _createBlock(_component_cc_popup, {
          key: 0,
          type: "upload",
          title: "提示",
          content: "我是一个提示"
        }))
      : _createCommentVNode("v-if", true)
  ]))
}
  
    const { defineComponent: _defineComponent } = Vue
const {ref} = Vue

const democomponentExport = /*#__PURE__*/_defineComponent({
  setup(__props, { expose }) {
  expose();

const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}

const __returned__ = { popupStatus, onClick, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cc_button = _resolveComponent("cc-button")
  const _component_cc_popup = _resolveComponent("cc-popup")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_cc_button, {
      type: "warn",
      value: "点我一下",
      onClick: _ctx.onClick
    }, null, 8 /* PROPS */, ["onClick"]),
    (_ctx.popupStatus)
      ? (_openBlock(), _createBlock(_component_cc_popup, {
          key: 0,
          type: "message",
          title: "提示",
          content: "我是一个提示"
        }))
      : _createCommentVNode("v-if", true)
  ]))
}
  
    const { defineComponent: _defineComponent } = Vue
const {ref} = Vue

const democomponentExport = /*#__PURE__*/_defineComponent({
  setup(__props, { expose }) {
  expose();

const popupStatus = ref<boolean>(false)
const onClick = () => {
  popupStatus.value = !popupStatus.value
}

const __returned__ = { popupStatus, onClick, ref }
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