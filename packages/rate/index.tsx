import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  readonly
} from  'vue'
import './index.scss'
import star from './star'
import full_star from './fullStar'

const CcRate = defineComponent({
  name: 'cc-rate',
  props: {
    value: {
      type: String,
      default: '0'
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    }
  },
  emits: ['mouse'],
  setup(props, { emit, slots }) {

    const renderColors = () => {
      const colors = ref<Array<string>>(['#F7BA2A', '#F7BA2A', '#F7BA2A'])
      if (props.colors) {
        colors.value.splice(0, 3).push(...props.colors as Array<string>)
      }
      const style = {

      }
      return style
    }

    const starObj = reactive<{[propname: string]: boolean}>({
      "star1": true,
      "star2": false,
      "star3": false,
      "star4": false,
      "star5": false
    })
    const saveStatus = ref<boolean>(false)
    const currentState = ref<number>(0)

    const renderStar = (num: number) => {
      for (let s = 0; s < num; s++) {
        starObj['star' + (s + 1)] = true
      }
      for (let s = 5; s > num; s--) {
        starObj['star' + s] = false
      }
    }

    const onMouse = (e: MouseEvent, id: string) => {
      const num: number = +id.slice(4, 5)
      currentState.value = num
      renderStar(num)
      emit('mouse', e)
    }

    const onMouseOut = () => {
      if (!saveStatus.value) {
        currentState.value = 0
        for (let s = 0; s <= 5; s++) {
          starObj['star' + (s + 1)] = false 
        }
      }
    }

    const onClick = () => {
      saveStatus.value = true
    }

    const renderText = computed(() => {
      const state: {[propname: number]: string} = {
        1: '极差',
        2: '失望',
        3: '一般',
        4: '满意',
        5: '惊喜'
      }
      return state[currentState.value]
    })

    const renderScore = computed(() => {
        if (props.value) return (+props.value).toFixed(1)
        return currentState.value === 0
        ? ''
        : currentState.value.toFixed(1)
      }
    )

    const setValue = () => {
      const num: number = +props.value
      currentState.value = num
      renderStar(num)
    }
    props.value && setValue()

    watch(
      starObj,
      (newV, oldV) => {
        if (saveStatus.value) {
          for (let s = 0; s < 5; s++) {
            starObj['star' + (s + 1)] = oldV['star' + (s + 1)]
          }
        }
      }
    )

    props.disabled && Object.freeze(starObj);

    const render = () => {
      return (
        [1, 2, 3, 4, 5].map((_, index) => (
          <div onMouseover={(e) => onMouse(e, `star${index + 1}`)}>
            {
              starObj[`star${index + 1}`] ? full_star() : star()
            }
          </div>
        ))
      )
    }

    return () => (
      <div class="cc-rate" onMouseout={onMouseOut} onClick={onClick} style={renderColors()}>
        { render() }
        { props.showText && <span>{ renderText.value }</span> }
        { props.showScore && <span>{ renderScore.value }</span> }
      </div>
    )
  }
})

export default CcRate;
