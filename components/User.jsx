export default function User({ user, progress, setProgress, resolved, setResolved }) {
    console.log(user);

    const handelProgress = () => {
        alert('clicked');
        const cnt = progress + 1;
        setProgress(cnt);
    }

    return (
        <div onClick={handelProgress} className='bg-white p-5 rounded-lg shadow-md my-5'>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-xl'>{user.title}</h1>
                <div className={`flex justify-center gap-2 items-center rounded-xl text-lg
                    ${user.status == "In-Progress" ? "bg-yellow-100 " : "bg-green-200 text-green-950"} `}>
                    <div className={`w-4 h-4 rounded-full
                            ${user.status === "In-Progress" ? "bg-yellow-300" : "bg-green-600"}`}></div>

                    <button className='text-green-950 '>{user.status}</button>
                </div>
            </div>
            <div className='text-[#627382]'>{user.description}</div>
            <div className='flex  flex-col md:flex-row justify-between text-[#627382]'>
                <div className='flex justify-between gap-3'>
                    <h3>#{user.id}</h3>
                    <p className={user.priority === "HIGH PRIORITY" ? "text-red-500 font-bold" : user.priority === "LOW PRIORITY" ? "text-green-500 font-bold" : "text-yellow-500 font-bold"} >{user.priority}</p>
                </div>
                <div className='flex justify-between gap-3'>
                    <h3> {user.customer} </h3>
                    <p>{user.createdAt}</p>
                </div>
            </div>
        </div>

    )
}