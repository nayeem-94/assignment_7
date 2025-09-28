import { use } from 'react';
import User from './User';

export default function Ticket({ tickets ,progress , setProgress , resolved , setResolved }) {

    const ticketData = use(tickets);
    console.log(ticketData);

    return (
        // <div>ticket : {ticketData[0].customer } </div>
        <div className="bg-[#f5f5f5]">

            <div className='container mx-auto flex pt-10  '>
                <div className=''>
                    <h1 className='text-2xl font-medium  '>Customer Tickets</h1>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-3'>
                        {
                            ticketData.map(user => < User key={user.id} user={user} progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved}></User>)
                        }
                    </div>
                </div>
                <div className='ml-10'>
                    <div>
                        <h1 className='text-2xl font-medium '>Task States</h1>
                        <div>
                            <div className='bg-white p-5 rounded-lg shadow-md my-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold '>Payment Fail - card decline jkakjsbjk lorem10</h1>
                                <button className='btn text-lg  bg-green-600  text-white w-full'>Complete</button>
                            </div>
                             <div className='bg-white p-5 rounded-lg shadow-md my-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold '>Payment Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illum? Fail - card decline jkakjsbjk lorem10</h1>
                                <button className='btn text-lg  bg-green-600  text-white w-full'>Complete</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1 className='text-2xl font-medium '>
                            Resolved Task
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}