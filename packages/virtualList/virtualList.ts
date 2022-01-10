import { App } from 'vue'

const virtualList = (app: App) => {
  app.directive('v-infinite-scroll', {
    mounted() {
      console.log(1)
    }
  })
  app.directive('infinite-scroll-disabled', {

  })
  app.directive('infinite-scroll-delay', {

  })
  app.directive('infinite-scroll-distance', {

  })
  app.directive('infinite-scroll-immediate', {

  })
}

export default virtualList;
