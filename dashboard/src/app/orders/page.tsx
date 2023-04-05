import Header from "@/components/Header/page";
import { Sidebar } from "@/components/Sidebar/page";

export default function Customers(){
    return(
        <main className='bg-gray-100 flex w-screen min-h-screen'>
      

            <Sidebar>
            <div className='h-full w-full'>
                <Header title={'Orders'}/>

                
            </div>
            </Sidebar>
            </main>
    )
}