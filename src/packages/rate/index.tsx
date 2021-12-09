import {
  defineComponent,
  ref,
  reactive
} from  'vue'
import './index.scss'
import star from './../assets/star.svg'
import full_star from './../assets/full_star.svg'

const CcRate = defineComponent({
  name: 'cc-rate',
  props: {
    value: {
      type: Number,
      default: 0
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
    }

    const starObj = reactive<{[propname: string]: boolean}>({
      "star1": false,
      "star2": false,
      "star3": false,
      "star4": false,
      "star5": false
    })
    const saveStatus = ref<boolean>(false)

    const onMouse = (e: MouseEvent, id: string) => {
      const num: number = +id.slice(4, 5)
      for (let s = 0; s < num; s++) {
        starObj['star' + (s + 1)] = true
      }
      for (let s = 5; s > num; s--) {
        starObj['star' + s] = false
      }

      emit('mouse', e)
    }

    const onMouseOut = () => {
      if (!saveStatus.value) {
        for (let s = 0; s <= 5; s++) {
          starObj['star' + (s + 1)] = false 
        }
      }
    }

    const onClick = () => {
      saveStatus.value = true
    }

    return () => (
      <div class="cc-rate" onMouseout={onMouseOut} onClick={onClick}>
        <img id="star1" src={starObj['star1'] ? full_star : star} alt="star" onMouseover={(e) => onMouse(e, 'star1')} />
        <img id="star2" src={starObj['star2'] ? full_star : star} alt="star" onMouseover={(e) => onMouse(e, 'star2')} />
        <img id="star3" src={starObj['star3'] ? full_star : star} alt="star" onMouseover={(e) => onMouse(e, 'star3')} />
        <img id="star4" src={starObj['star4'] ? full_star : star} alt="star" onMouseover={(e) => onMouse(e, 'star4')} />
        <img id="star5" src={starObj['star5'] ? full_star : star} alt="star" onMouseover={(e) => onMouse(e, 'star5')} />
      </div>
    )
  }
})

export default CcRate;
