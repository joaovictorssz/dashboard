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
        <div className="flex bg-gray-100 rounded-lg p-4 justify-between items-center mx-4 mt-2 hover:bg-gray-200 cursor-pointer">

        <div className="flex items-center w-full ">
            <section className='p-4 bg-purple-800 text-white rounded-lg mr-4'>
                <RxPerson/>  
            </section>

            <section className="flex w-full justify-between">
                <p className="w-1/4">{props.name.first} {props.name.last}</p>
                <p className="w-1/4">{props.email}</p>
                <p className="w-1/4">{props.date}</p>
                <p className="w-1/4">{props.method}</p>
            </section>
        </div>

        </div>
    )

}