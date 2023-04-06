'use client'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/page'
import { Sidebar } from '@/components/Sidebar/page'
import TopCard from '@/components/TopCards/page'
import BarChart from '@/components/BarChart/page'
import RecentOrders from '@/components/RecentOrders/page'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
      <ThemeProvider attribute='class' >
            <main className='dark:bg-slate-900 bg-gray-100 flex w-screen min-h-screen'>
          
          <Sidebar>
          <div className='h-full w-full'>
              <Header title={'Dashboard'}/>
              <TopCard/>

              <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
                <BarChart/>
                <RecentOrders/>
              </div>
              
          </div>
          </Sidebar>
        </main>
      </ThemeProvider>
    
  )
}
