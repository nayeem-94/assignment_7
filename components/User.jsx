export default function User({ user }) {
    console.log(user);
    return (
        <div className='bg-white p-5 rounded-lg shadow-md my-5'>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-xl'>{user.title}</h1>
                <div className='flex justify-center gap-2 items-center rounded-xl text-lg bg-green-200  '>
                    <div className='w-4 h-4 rounded-full bg-green-600'></div>

                    <button className='text-green-950 '>{user.status}</button>
                </div>
            </div>
            <div className='text-[#627382]'>{user.description}</div>
            <div className='flex justify-between text-[#627382]'>
                <div className='flex justify-between gap-3'>
                    <h3>#{user.id}</h3>
                    <p className={user.priority === "HIGH PRIORITY" ? "text-red-500" : user.priority === "LOW" ? "text-green-500" : "text-yellow-600"} >{user.priority}</p>
                </div>
                <div className='flex justify-between gap-3'>
                    <h3> {user.customer} </h3>
                    <p>{user.createdAt}</p>
                </div>
            </div>
        </div>
    )
}