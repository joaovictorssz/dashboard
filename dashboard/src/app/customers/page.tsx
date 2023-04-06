'use client'

import Header from "@/components/Header/page";
import { Sidebar } from "@/components/Sidebar/page";
import { data, Customer } from '@/utils/RecentOrdersData'
import { useState, useEffect } from 'react';
import CustomerItem from "./CustomerItem/page";
import { ThemeProvider } from "next-themes";

export default function Customers(){


    const [customers, setCustomers] = useState<Customer[]>([])
    useEffect(()=>{
        setCustomers(data)

    }, [])

    return(
        <ThemeProvider attribute="class">
            <main className='bg-gray-100 flex w-full min-h-screen dark:bg-slate-900'>
      

                <Sidebar>
                <div className='h-full w-full'>
                    <Header title={'Customers'}/>
                    
                    <main className="flex flex-col m-4 bg-white dark:bg-slate-700 rounded-l">

                        <header className=" font-bold p-4 w-full grid grid-cols-4">
                            <span className="">Name:</span>
                            <span className="">E-mail:</span>
                            <span className="">Last order:</span>
                            <span className="">Method:</span>
                        </header>
                        {
                            customers ? customers.map((element, id)=>{
                                return <CustomerItem method={element.method} date={element.date}  key={Math.random()} email={element.email} name={{first: element.name.first, last: element.name.last}}/>
                            }) : <></>
                        }
                    </main>

                </div>
                </Sidebar>
            </main>
        </ThemeProvider>
    )
}