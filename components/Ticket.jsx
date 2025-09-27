import { use } from 'react';
import User from './User';

export default function Ticket({ tickets }) {

    const ticketData = use(tickets);
    console.log(ticketData);

    return (
        // <div>ticket : {ticketData[0].customer } </div>
        <div className="bg-[#f5f5f5]">


            <div className='container mx-auto flex justify-between my-10'>
                <div>
                    <h1>customer Tickets</h1>


                    <div className='grid grid-cols-2 gap-3 w-5/7'>
                        {
                            ticketData.map(user => < User key={user.id} user={user}></User>)
                        }
                    </div>

                </div>
                <div>
                    <div>
                        <h1>Task States</h1>

                    </div>
                    <div>
                        <h1>
                            Resolved Task
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}