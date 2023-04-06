import { FaShoppingBag } from "react-icons/fa"
import {BsThreeDotsVertical} from 'react-icons/bs'

type OrderItemProps = {
    id: number,
    total: number,
    method: string,
    date: string,
    name:{
        first: string,
        last: string
    },
    status: string
}

export default function OrderItem(props: OrderItemProps){
    return(
        <li key={props.id} className="dark:bg-slate-700 bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <div className="flex items-center w-full ">
                <div className="dark:bg-purple-900  bg-purple-100 p-3 rounded-lg"><FaShoppingBag className="dark:text-purple-400 text-purple-800"/></div>

                <div className="pl-4 ">
                    <p className="text-gray-800 font-bold dark:text-slate-200">${props.total}</p>
                    <p className="text-gray-800 text-sm dark:text-slate-400" >{props.name.first} {props.name.last}</p>
                </div>

                
            </div>

                <p className=" text-gray-600 sm:text-left text-right">
                    <span className={` p-2 rounded-lg    ${props.status === 'failed' ? 'bg-red-200' : props.status === 'successful' ? 'bg-green-200' : props.status === 'processing' ? 'bg-yellow-200' : ''}`}>{props.status}</span>
                </p>

                <p className="hidden md:flex">
                    {props.date}
                </p>

                <div className="sm:flex hidden justify-between items-center">
                    <p>{props.method}</p>
                    <p><BsThreeDotsVertical/></p>
                </div>
        </li>
    )
}