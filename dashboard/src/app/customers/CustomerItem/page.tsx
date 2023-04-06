import { RxPerson } from 'react-icons/rx';

type  CustomerProps = {
    name:  {
        first: string,
        last: string,

    },
    email: string,
    date:  string,
    method: string
}


export default function  CustomerItem(props: CustomerProps){

    return(
        <div className="flex dark:bg-slate-600 bg-gray-100 rounded-lg p-4 justify-between items-center mx-4 mt-2 hover:bg-gray-200 cursor-pointer dark:text-slate-300">
            
            <div className="flex items-center w-full">
                <section className='p-4 bg-purple-800 text-white rounded-lg mr-4'>
                    <RxPerson/>  
                </section>

                <section className="grid grid-cols-4 w-full justify-between">
                    <p className="flex">
                        <label htmlFor="" className=' mr-4 font-bold hidden'>Name: </label>
                        {props.name.first} {props.name.last}
                    </p>
                    <p className=" flex">
                        <label htmlFor="" className='mr-4 font-bold hidden'>E-mail: </label>
                        {props.email}
                    </p>
                    <p className=" flex ">
                        <label htmlFor="" className='mr-4 font-bold hidden '>Last order: </label>
                        {props.date}
                    </p>
                    <p className=" flex "> 
                        <label htmlFor="" className='mr-4 font-bold hidden '>Method:  </label>
                        {props.method}
                    </p>
                </section>
            </div>

        </div>
    )

}