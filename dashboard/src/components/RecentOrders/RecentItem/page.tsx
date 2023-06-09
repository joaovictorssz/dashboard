import {FaShoppingBag} from 'react-icons/fa'

type RecentOrderProps = {
    id:  number,
    name:{
        first: string,
        last: string
    },
    total: number;
    status: 'failed' | 'successful' | 'processing';
    method: string;
    date: string;
}

export default function  RecentItem(props: RecentOrderProps){
    return(
        <li className='bg-gray-50 dark:bg-slate-600 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer' >

                <div className='bg-purple-100 dark:bg-purple-950 rounded-lg p-3'>
                    <FaShoppingBag className='text-purple-800 dark:text-purple-400'></FaShoppingBag>
                </div>

                <div className='pl-4 '>
                    <p className='text-gray-800 font-bold dark:text-white'>${props.total}</p>
                    <p className='text-gray-400 text-sm'>{props.name.first}</p>
                </div>

                <p className='lg:flex md:hidden  absolute right-6 text-sm'>
                    {props.date}
                </p>

        </li>
    )
}