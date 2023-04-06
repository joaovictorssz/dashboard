'use client'

import React, { useEffect, useState } from 'react'
import RecentItem from './RecentItem/page'
import { data, Customer } from '@/utils/RecentOrdersData'

export default function RecentOrders() {


  const [recentOrders, setRecentOrders] = useState<Customer[]>([])

  useEffect(()=>{
    setRecentOrders(data)
  } 
  , [])

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg dark:border-slate-700 bg-white dark:bg-slate-700 overflow-auto ">
      <h1>Recent Orders</h1>
      <ul>
        {
          recentOrders ? recentOrders.map((element, id)=>{
            return <RecentItem 
            date={element.date} 
            id={element.id} 
            method={element.method} 
            name={element.name} 
            status={element.status} 
            total={element.total}
            key={Math.random()}/>
          })

          :  <p>None recent orders</p>
        } 
      </ul>
    </div>
  )
}
