import {
  computed,
  defineComponent,
  ref
} from 'vue'
import './index.scss'

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
      default: 'prev, pager, next, jumper, ->, total'
    }
  },
  emits: ['sizeChange', 'currentChange', 'prevClick', 'nextClick'],
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
      currentChange: (current: number) => void
    }

    const currentPage = ref<number>(props.currentPage)

    type currentType = number | 'pre' | 'next'

    const currentChange = (current: currentType) => {
      if (current !== 'pre' && current !== 'next') {
        currentPage.value = current
      }
      if (current === 'pre') {
        if (currentPage.value === 1) return;
        currentPage.value -= 1
        emit('prevClick', currentPage.value)
      }
      if (current === 'next') {
        if (currentPage.value === computePager.value) return;
        currentPage.value += 1
        emit('nextClick', currentPage.value)
      }
      emit('currentChange', currentPage.value)
    }

    const renderPager = () => {
      const pagerArray: Array<PagerType> = []
      for (let pager = 1; pager <= computePager.value; pager++) {
        pagerArray.push({
          pager: pager,
          currentChange: (current) => currentChange(current)
        })
      }
      return pagerArray
    }

    const currentStyle = (index: number) => {
      const classes = ['pager'] as Array<string>
      currentPage.value === (index + 1) && classes.push('currentPager')
      return classes.join(' ')
    }

    const pre = ref<HTMLDivElement>()
    const next = ref<HTMLDivElement>()
    const changePagerStyle = computed(() => {
      const classes = ['change_pager'] as Array<string>
      if (currentPage.value === 1) pre.value?.classList.add('is_end')
      if (currentPage.value === computePager.value) next.value?.classList.add('is_end')

      return classes.join(' ')
    })

    return () => (
      <div class="cc-pagination">
        <div class={changePagerStyle.value} ref={pre} onClick={() => currentChange('pre')}>{renderPre()}</div>
        <div class="pagers">
          {
            renderPager().map((pager, index) => (
              <span
                class={currentStyle(index)}
                key={'change_pager' + index}
                onClick={() => pager.currentChange(pager.pager)}
              >{pager.pager}</span>
            ))
          }
        </div>
        <div class={changePagerStyle.value} ref={next} onClick={() => currentChange('next')}>{renderNext()}</div>
      </div>
    )
  }
})

export default CcPagination;
