import codeBtn from './codeBtn/codeBtn.vue'
const components = [codeBtn]
export default {
  install(Vue) {
    components.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}
