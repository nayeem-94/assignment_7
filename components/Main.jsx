export default function Main() {
    return (
        
        <div className="bg-[#f5f5f5]">
            <div className="container mx-auto py-10 rounded-lg">
                <div className="flex gap-5 text-white">
                    <div  className="w-1/2 h-[200px] rounded-xl flex  justify-center items-center bg-linear-to-r from-[#632ee3] to-[#9f62f2]" >
                        <div style={{ backgroundImage: "url('/vector1.png')" , 
                          

                        }} className=" ">

                            <h1 className="text-xl font-semibold">In-Progress</h1>
                            <h1 className="text-center font-semibold text-4xl mt-2">
                                0
                            </h1>
                        </div>

                    </div>
                    <div className="w-1/2 h-[200px] rounded-xl flex  justify-center items-center bg-linear-to-r from-[#54cf68] to-[#00827a]">
                        <div>
                            <h1 className="text-xl font-semibold">Resolved</h1>
                            <h1 className="text-center font-semibold text-4xl mt-2">
                                0
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
       




        
    )
}