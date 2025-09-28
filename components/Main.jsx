export default function Main() {
    return (

        <div className="bg-[#f5f5f5]">
            <div className="container mx-auto py-10 rounded-lg">
                <div className="flex gap-5 text-white">
                    <div className="w-1/2 h-[200px] rounded-xl flex  justify-center items-center bg-linear-to-r from-[#632ee3] to-[#9f62f2]" >


                        <div style={{ backgroundImage: "url('/vector1.png')", width: "732px", height: "200px", backgroundRepeat: "no-repeat", backgroundPosition: "left" }}></div>
                        <div className="absolute text-center">
                            <h1 className="text-2xl font-semibold">In-Progress</h1>
                            <h1 className="text-center font-semibold text-5xl mt-2">  0</h1>
                        </div>
                        <div style={{ backgroundImage: "url('/vector1.png')", transform: "scaleX(-1)", width: "732px", height: "200px", backgroundRepeat: "no-repeat" }}></div>

                    </div>
                    <div className="w-1/2 h-[200px] rounded-xl flex  justify-center items-center bg-linear-to-r from-[#54cf68] to-[#00827a]" >


                        <div style={{ backgroundImage: "url('/vector1.png')", width: "732px", height: "200px", backgroundRepeat: "no-repeat", backgroundPosition: "left" }}></div>
                        <div className="absolute text-center">
                            <h1 className="text-2xl font-semibold">Resolved</h1>
                            <h1 className="text-center font-semibold text-5xl mt-2"> 0</h1>
                        </div>
                        <div style={{ backgroundImage: "url('/vector1.png')", transform: "scaleX(-1)", width: "732px", height: "200px", backgroundRepeat: "no-repeat" }}></div>

                    </div>
                </div>
            </div>
        </div >







    )
}