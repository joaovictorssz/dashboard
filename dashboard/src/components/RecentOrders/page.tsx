'use client'

import React, { useEffect, useState } from 'react'
import RecentItem from './RecentItem/page'
import { RecentOrdersData, Transaction } from '@/utils/RecentOrdersData';

export default function RecentOrders() {

  const [recentOrders, setRecentOrders] = useState<Transaction[]>([])

  useEffect(()=>{
    setRecentOrders(RecentOrdersData(recentOrders)) 

  }, [])

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white  overflow-scroll ">
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
            total={element.total}/>
          })

          :  <p>None recent orders</p>
        } 
      </ul>
    </div>
  )
}
