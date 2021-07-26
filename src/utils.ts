import {reactive} from 'vue'

const useAccess =  reactive({
  access_token: '',
  ad:false,
  wechat: false,
  qq:false
})

export {
  useAccess
}