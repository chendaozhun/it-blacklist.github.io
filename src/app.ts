import { createApp } from 'vue'
import { Button, Toast } from '@nutui/nutui-taro';
import {request} from '@tarojs/taro'
import '@nutui/nutui-taro/dist/style.css';
import './app.scss'
import {useAccess} from './utils'

const App = createApp({
  onShow (options) {
    console.log('options',options);
    request({url:'https://it-blacklist-a6de4b.service.tcloudbase.com/token'})
      .then(res=>{
        useAccess.access_token = res.data.access_token
        useAccess.wechat =  res.data.wechat
      })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(Button).use(Toast)

export default App
