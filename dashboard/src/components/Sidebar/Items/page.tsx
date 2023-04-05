
import Link from 'next/link';
import { ReactNode } from 'react';

export const SidebarItem = ({href, icon, isHome}: {href: string, icon: ReactNode, isHome?: boolean})=>{

    return(
        <Link href={href}>
            <section className={`${isHome ? 'bg-purple-800 text-white' : ' text-slate-900 bg-gray-100 hover:bg-gray-200 cursor-pointer'} p-3 rounded-lg inline-block`}>
                {icon}
            </section>
        </Link>
    )
}