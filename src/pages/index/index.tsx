import { reactive, h, defineComponent, onMounted } from 'vue'
import {View} from '@tarojs/components'
import {Button } from '@nutui/nutui-taro'
import { request} from '@tarojs/taro'
import './index.scss'
import {useAccess} from '../../utils'

export default defineComponent({
  name: 'Index',
  setup () {
    onMounted(()=>{
      console.log(useAccess)
      setTimeout(()=>{
        // request({
        //   url:`https://api.weixin.qq.com/tcb/databasequery?access_token=${useAccess.access_token}&env=prod-4g7smzwkdb65a941`,
        //   method:'POST',
        //   data: {
        //     env:'prod-4g7smzwkdb65a941',
        //     query: "db.collection(\"black_list\").where({checked:true}).limit(10).get({})"
        //   }
        // }).then(res=>{
        //   console.log(res)
        // })
        request({
          url: `https://it-blacklist-a6de4b.service.tcloudbase.com/api/tcb/databasequery?access_token=${useAccess.access_token}&env=prod-4g7smzwkdb65a941`,
          method:'POST',
          data: {
            env:'prod-4g7smzwkdb65a941',
            query: "db.collection(\"black_list\").where({checked:true}).limit(10).get({})"
          }
        }).then(res=>{
          console.log(res)
        })
      },1000)
    })
    return () => (
      <View>

      </View>
    )
  }
})
