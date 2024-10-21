import { useStore } from '@/lib/store'
import React from 'react'

export const ShowContentFile = () => {
    const {contextFiles} = useStore()
  return (
    <div 
    className='text-xs text-left p-1 text-slate-900'
    >{contextFiles}</div>
  )
}
