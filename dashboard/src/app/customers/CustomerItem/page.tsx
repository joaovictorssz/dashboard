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
        <div className="flex  bg-gray-100 rounded-lg p-4 justify-between items-center mx-4 mt-2 hover:bg-gray-200 cursor-pointer ">

            <div className="flex lg:flex-row sm:flex-row md:flex-row items-center w-full md:items-center">
                <section className='p-4 bg-purple-800 text-white rounded-lg mr-4'>
                    <RxPerson/>  
                </section>

                <section className="flex w-full justify-between sm:flex-col">
                    <p className="w-1/4 flex sm:w-full">
                        <label htmlFor="" className='hidden sm:block font-bold mr-1'>Name: </label>
                        {props.name.first} {props.name.last}
                    </p>
                    <p className="w-1/4 flex sm:w-full">
                        <label htmlFor="" className='hidden sm:block font-bold mr-1'>E-mail: </label>
                        {props.email}
                    </p>
                    <p className="w-1/4 flex sm:w-full">
                        <label htmlFor="" className='hidden sm:block font-bold mr-1'>Last order: </label>
                        {props.date}
                    </p>
                    <p className="w-1/4 flex sm:w-full"> 
                        <label htmlFor="" className='hidden sm:block font-bold mr-1'>Method:  </label>
                        {props.method}
                    </p>
                </section>
            </div>

        </div>
    )

}