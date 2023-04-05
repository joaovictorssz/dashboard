import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header/page'
import { Sidebar } from '@/components/Sidebar/page'
import TopCard from '@/components/TopCards/page'
import BarChart from '@/components/BarChart/page'
import RecentOrders from '@/components/RecentOrders/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100 flex w-screen min-h-screen'>
      

      <Sidebar>
      <div className='h-full w-full'>
          <Header/>
          <TopCard/>

          <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
            <BarChart/>

            <RecentOrders/>
          </div>
          
      </div>
      </Sidebar>
    </main>
  )
}
