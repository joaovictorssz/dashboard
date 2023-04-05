import { RxPerson } from 'react-icons/rx';

type  CustomerProps = {
    name:  {
        first: string,
        last: string,
    },
    email: string
}


export default function  CustomerItem(props: CustomerProps){

    return(
        <div className="flex bg-gray-100 rounded-lg p-4 justify-between items-center mx-4 mt-2 hover:bg-gray-200 cursor-pointer">

        <div className="flex items-center w-full">
            <section className='p-4 bg-purple-800 text-white rounded-lg '>
                <RxPerson/>  
            </section>

            <section className="flex  w-full justify-between">
                <p className="w-3/5 ml-2">{props.name.first} {props.name.last}</p>
                <p className="w-2/5">{props.email}</p>
            </section>
        </div>

        </div>
    )

}