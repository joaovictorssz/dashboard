import { ReactNode } from "react"
import { SidebarItem } from "./Items/page"

import {FiSettings} from 'react-icons/fi'
import {AiOutlineShopping} from 'react-icons/ai'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'

export const  Sidebar = ({children}:{children:  ReactNode})=>{
    return (
        <div className="flex w-screen ">
            <aside className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between items-center">
                
                <section className="flex flex-col items-center justify-between">
                    <SidebarItem isHome={true} href={'/'} icon={<RxSketchLogo size={20}/>}/>
                    <span className="border-[1px] border-gray-200 w-full  mb-1 "></span>
                    <SidebarItem href="/" isHome={false} icon={<RxDashboard/>}/>
                    <SidebarItem  href="/customers" isHome={false} icon={<RxPerson/>}/>
                    <SidebarItem href="/orders" isHome={false} icon={<AiOutlineShopping/>}/>
                    <SidebarItem href="/configuration" isHome={false} icon={<FiSettings/>}/>
                </section>

            </aside>

            <main className="ml-20 w-full">
                {children}
            </main>
        </div>
    )
}