'use client'

import Header from "@/components/Header/page";
import { Sidebar } from "@/components/Sidebar/page";
import { data, Customer } from '@/utils/RecentOrdersData'
import { useState, useEffect } from 'react';
import CustomerItem from "./CustomerItem/page";

export default function Customers(){

    const [customers, setCustomers] = useState<Customer[]>([])
    useEffect(()=>{
        setCustomers(data)
        console.log(customers)
    }, [])

    return(
        <main className='bg-gray-100 flex w-full min-h-screen'>
      

            <Sidebar>
            <div className='h-full w-full'>
                <Header title={'Customers'}/>
                
                <main className="flex flex-col m-4 bg-white ">

                    <header className=" font-bold p-4 w-full flex justify-between">
                        <span className="w-1/4">Name:</span>
                        <span className="w-1/4">E-mail:</span>
                        <span className="w-1/4">Last order:</span>
                        <span className="w-1/4">Method:</span>
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
    )
}