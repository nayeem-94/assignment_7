import { use, useState } from 'react';
import User from './User';




export default function Ticket({ tickets, progress, setProgress, resolved, setResolved }) {

    const ticketData = use(tickets);
    // console.log(ticketData);

    const [state, setState] = useState([]);
    const [complet, setComplet] = useState([]);


    const handelProgress = (user) => {
        alert(`Id : ${user.id} Task is added to the list `);
        setState([...state, user]);
        const cnt = progress + 1;
        setProgress(cnt);
    }
    const handleComplete = (problem) => {
        setProgress(progress - 1);
        setResolved(resolved + 1);
        setComplet([...complet, problem]);
        setState(state.filter(user => user.id !== problem.id));
    }

    console.log(complet);

    // console.log(state);

    return (
        // <div>ticket : {ticketData[0].customer } </div>
        <div className="bg-[#f5f5f5]">

            <div className='container mx-auto flex pt-10  '>
                <div className='w-5/7 '>
                    <h1 className='text-2xl font-medium  '>Customer Tickets</h1>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-3'>
                        {
                            ticketData.map(user => < User key={user.id} user={user} progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved} handelProgress={handelProgress}></User>)
                        }
                    </div>
                </div>
                <div className='ml-10 w-2/7'>
                    <div className='mb-10'>
                        <h1 className='text-2xl font-medium '>Task States</h1>
                        <div>
                            {/* <p>seclect a task list  </p> */}
                            {
                                state.length === 0 ? (
                                    <h1 className="text-xl text-gray-400 font-semibold  mt-5 mb-8">
                                        Select a Ticket to add Task Status
                                    </h1>
                                ) : (
                                    state.map(user => (

                                        <div key={user.id} className='bg-white p-5 rounded-lg shadow-md my-5 flex flex-col gap-2'>
                                            <h1 className='text-lg font-semibold '>{user.title}</h1>
                                            <button onClick={() => handleComplete(user)} className='btn text-lg mt-2  bg-green-600  text-white w-full'>Complete</button>
                                        </div>
                                    )))
                            }


                        </div>

                    </div>
                    <div>
                        <h1 className='text-2xl font-medium '>
                            Resolved Task
                        </h1>
                        <div>
                            {
                                complet.length === 0 ? (
                                    <h1 className="text-xl text-gray-400 font-semibold  mt-5 mb-8">
                                        No Resolved Task Yet
                                    </h1>
                                ) : (
                                    complet.map(user => (
                                        <div key={user.id} className='bg-[#e0e7ff] p-5 rounded-lg shadow-md my-5 flex flex-col gap-2'>
                                            <h1 className='text-lg font-semibold text-[#001931] '>{user.title}</h1>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}