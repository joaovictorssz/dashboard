'use client'

import { ReactNode, useEffect, useState } from "react"
import { SidebarItem } from "./Items/page"
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import {AiOutlineShopping} from 'react-icons/ai'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import { useTheme } from "next-themes"

export const  Sidebar = ({children}:{children:  ReactNode})=>{

    const {setTheme, theme} = useTheme()


    return (
        <div className="flex w-screen ">
            <aside className="dark:bg-slate-900 dark:border-r-slate-700 fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between items-center">
                
                <section className="flex flex-col items-center justify-between">
                    <SidebarItem isHome={true} href={'/'} icon={<RxSketchLogo size={20}/>}/>
                    <span className="border-[1px] border-gray-200 w-full  mb-1 dark:border-slate-600"></span>
                    <SidebarItem href="/" isHome={false} icon={<RxDashboard/>}/>
                    <SidebarItem  href="/customers" isHome={false} icon={<RxPerson/>}/>
                    <SidebarItem href="/orders" isHome={false} icon={<AiOutlineShopping/>}/>    
                    <button className={`dark:bg-slate-700 dark:hover:bg-slate-800 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg inline-block`} onClick={()=>{setTheme(theme === "light" ? 'dark' : 'light')}}>
                        {theme === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>}
                    </button>
                    
                </section>


            </aside>

            <main className="ml-20 w-full">
                {children}
            </main>
        </div>
    )
}