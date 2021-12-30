import {
  computed,
  defineComponent,
  watch
} from 'vue'
import './index.scss'
import message from '../message/index';
import { useState, useClass } from '../utils/hooks/index';

const CcPagination = defineComponent({
  name: 'cc-pagination',
  props: {
    background: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    prevText: {
      type: String
    },
    nextText: {
      type: String
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, jumper'
    }
  },
  emits: ['currentChange', 'prevClick', 'nextClick'],
  setup(props, { emit, slots }) {

    const renderPre = () => {
      return props.prevText || '<' 
    }

    const renderNext = () => {
      return props.nextText || '>'
    }

    const computePager = computed(() => {
      return Math.ceil(props.total / props.pageSize)
    })

    type PagerType = {
      pager: number,
      currentChange?: (current: number) => void
    }

    const [currentPage, useCurrentPage] = useState<number>()

    type currentType = number | 'pre' | 'next' | '...'

    const currentChange = (current: currentType) => {
      if (current !== 'pre' && current !== 'next') {
        useCurrentPage(current as number)
      }
      if (current === 'pre') {
        if (currentPage.value === 1) return;
        currentPage.value -= 1
        useCurrentPage(currentPage.value--)
        emit('prevClick', currentPage.value)
      }
      if (current === 'next') {
        if (currentPage.value === computePager.value) return;
        useCurrentPage(currentPage.value++)
        emit('nextClick', currentPage.value)
      }
    }

    watch(currentPage, () => {
      emit('currentChange', currentPage.value)
    })

    // const renderOmit = (pagerArray: Array<PagerType>) => {
    //   pagerArray.splice(3, 0, {
    //     pager: 0
    //   })
    //   pagerArray.splice(4, computePager.value - 6)
    // }

    const renderPager = () => {
      const pagerArray: Array<PagerType> = []
      for (let pager = 1; pager <= computePager.value; pager++) {
        pagerArray.push({
          pager: pager,
          currentChange: (current) => currentChange(current)
        })
      }
      // if (computePager.value > 7) renderOmit(pagerArray) 
      return pagerArray
    }

    const currentStyle = (index: number) => {
      const classes = ['pager'] as Array<string>
      props.background && classes.push('background')
      if (currentPage.value === (index + 1)) {
        props.background
        ? classes.push('currentBg')
        : classes.push('currentPager')
      }
      return classes.join(' ')
    }

    const pre_isEnd = useClass((classes) => {
      props.background && classes.push('background')
      currentPage.value === 1 && classes.push('is_end')
    }, ['change_pager'])
    const next_isEnd = useClass((classes) => {
      props.background && classes.push('background')
      currentPage.value === computePager.value && classes.push('is_end')
    }, ['change_pager'])

    const total = () => {
      return (
        <div
          class="total"
        >共 { props.total } 条
        </div>
      )
    }

    const prev = () => {
      return (
        <div
          class={pre_isEnd}
          onClick={() => currentChange('pre')}
        >{renderPre()}</div>
      )
    }

    const pager = () => {
      return (
        <div class="pagers">
          {
            renderPager().map((pager, index) => (
              <span
                class={currentStyle(index)}
                key={'change_pager' + index}
                onClick={() => pager.currentChange?.(pager.pager)}
              >{pager.pager
                ? pager.pager
                : '...'
              }</span>
            ))
          }
        </div>
      )
    }

    const next = () => {
      return (
        <div
          class={next_isEnd}
          onClick={() => currentChange('next')}
        >{renderNext()}</div>
      )
    }

    const jumper = () => {
      return (
        <div class="jumper">
          <span>前往</span>
          <input
            type="text"
            value={inputV.value}
            onInput={onInput}
            onKeydown={onKeydown}
          />
          <span>页</span>
        </div>
      )
    }

    const slot = () => <>{slots.default?.()}</>

    type FnType = () => JSX.Element

    const layout = () => {
      const layouts = props.layout.split(', ')
      const layoutFn: Array<FnType> = []
      layouts.forEach((layout, index) => {
        if (layout === 'total') layoutFn.splice(index, 0, total)
        if (layout === 'prev') layoutFn.splice(index, 0, prev)
        if (layout === 'pager') layoutFn.splice(index, 0, pager)
        if (layout === 'next') layoutFn.splice(index, 0, next)
        if (layout === 'jumper') layoutFn.splice(index, 0, jumper)
      })
      layoutFn.push(slot)
      return layoutFn.map(fn => fn())
    }

    const [inputV, useInputV] = useState<number>()
    const onInput = (e: Event) => {
      const value = (e.target as unknown as HTMLInputElement).value
      if (value !== '' && typeof +value !== 'number') {
        message({
          type: 'error',
          text: '请输入数字'
        })
      }
      if (+value < 1) {
        useInputV(1)
        return;
      };
      if (+value > computePager.value) {
        useInputV(computePager.value)
        return;
      }
      useInputV(+value)
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (e && e.code === 'Enter') {
        useCurrentPage(inputV.value as number)
      }
    }

    return () => (
      <div class="cc-pagination">
        {
          layout()
        }
      </div>
    )
  }
})

export default CcPagination;
