'use client'

import Header from "@/components/Header/page";
import { Sidebar } from "@/components/Sidebar/page";
import { data } from "@/utils/RecentOrdersData";
import OrderItem from "./OrderItem/page";
import { ThemeProvider } from "next-themes";

export default function Customers(){
    return(
        <ThemeProvider attribute="class">
            <main className='dark:bg-slate-900 bg-gray-100 flex w-full min-h-screen'>
      

      <Sidebar>
      <div className='h-full w-full'>
          <Header title={'Orders'}/>
          
          <main className="p-4">

                <div className="w-full m-auto p-4 border rounded-lg dark:bg-slate-800 dark:border-slate-700 bg-white">

                    <section className="font-bold my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">

                        <span>Order:</span>
                        <span className="sm:text-left text-right">Status:</span>
                        <span className="hidden md:grid">Last Order:</span>
                        <span className="hidden sm:grid">Method:</span>

                    </section>

                    <ul className="">
                        {data ? data.map((el, id)=>{
                            return (<OrderItem status={el.status} method={el.method} date={el.date} name={{first: el.name.first, last: el.name.last}} total={el.total} id={id}/>)
                        }) : <p>Nothing to show</p>}
                    </ul>

                </div>

                </main>
                
                </div>
            </Sidebar>
        </main>
        </ThemeProvider>
    )
}