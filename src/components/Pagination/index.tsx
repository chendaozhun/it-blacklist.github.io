import React from 'react'
import { Text, View, Button, Picker } from 'remax/wechat'

interface Pagination {
  current: number;
  total: number;
  pageSize: number;
}

interface PaginationProps {
  pagination: Pagination;
  onPageChange: Function;
}

export default ({ pagination: { current, total, pageSize }, onPageChange }: PaginationProps) => {
  const totalPage = Math.ceil(total / pageSize)
  
  const multiArray: Array<Array<string>> = [[], []]
  const multiIndex = [0, 0]
  for (let i = 0; i < Math.ceil(totalPage / 10); i++) {
    multiArray[0].push(`${i * 10 + 1}-${(i + 1) * 10}页`)
  }
  const pushSecondArray = (index: number) => {
    for (let i = 0; i < totalPage - (index * 10); i++) {
      multiArray[1].push(`第${index * 10 + i + 1}页`)
    }
  }
  pushSecondArray(0)
  const pickerChange = (e: { detail: { column: number; value: number } }) => {
    multiIndex[e.detail.column] = e.detail.value
    pushSecondArray(e.detail.column)
  }
  const pickerConfirm = (e: { detail: { value: number[] } }) => {
    onPageChange(e.detail.value[0] * 10 + e.detail.value[1] + 1)
  }
  
  return (
    <View style={{ margin: '20px 0', display: 'flex' }}>
      <Button type='primary' size='mini' onClick={() => onPageChange(--current)}
              disabled={current === 1}>上一页
      </Button>
      <Picker mode="multiSelector" onChange={e => pickerConfirm(e)} onColumnChange={e => pickerChange(e)}
              value={multiIndex} range={multiArray}>
        <View className="picker">
          <Text style={{ color: '#1989fa', lineHeight: '60px' }}>{current}</Text>/{totalPage}
        </View>
      </Picker>
      <Button type='primary' size='mini' onClick={() => onPageChange(++current)}
              disabled={current === totalPage}>下一页
      </Button>
    </View>
  )
}
