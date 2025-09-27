export default function Navber() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex justify-between container mx-auto  items-center">

                <div className="text-xl  font-bold">CS-Ticket System</div>
                <div className=" grid grid-cols-3 md:flex gap-5 justify-center items-center">
                    <p>Home</p>
                    <p>FAQ</p>
                    <p>Changelog</p>
                    <p>Blog</p>
                    <p>Download</p>
                    <p>Contact</p>

                    <button className="btn rounded-lg text-white md:text-lg bg-linear-to-r from-[#632ee3] to-[#9f62f2]">+ New Ticket</button>


                </div>
            </div>

        </div>

    )
}