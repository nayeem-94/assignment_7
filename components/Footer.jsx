export default function Footer() {
    return (
        <div className="bg-black text-white  ">
            <div className="container mx-auto  ">

                <div className="grid grid-cols-2 mx-auto place-items-center md:grid-cols-5 gap-8  mb-10 pt-15 border-b border-gray-700  py-10">
                    <div className="flex flex-col gap-4 p-6 md:p-0">
                        <h1 className="text-2xl font-bold ">CS - Ticket System</h1>
                        <p className="text-sm text-[#a1a1aa]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam similique, sapiente quia debitis eius est voluptatum sequi voluptates tempore. Laborum similique fugiat enim facilis doloremque commodi necessitatibus ex consequuntur esse.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold " >Company</h1>
                        <div className="text-sm text-[#a1a1aa] flex flex-col gap-4">
                            <h3>About Us</h3>
                            <h3>Our Mission</h3>
                            <h3>Contact Saled</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold ">Services</h1>
                        <div className="text-sm text-[#a1a1aa] flex flex-col gap-4">

                            <h3>Production and Services</h3>
                            <h3>Customer Stories</h3>
                            <h3>Download Apps</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold ">Information</h1>
                        <div className="text-sm text-[#a1a1aa] flex flex-col gap-4">
                            <h3>Privacy and Policy</h3>
                            <h3>Terms & Conditon</h3>
                            <h3>Join Us</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold  ">Social Link</h1>
                        <div className="text-sm text-[#a1a1aa] flex flex-col gap-4">

                            <div className="flex items-center gap-2">
                                <img src="/linkdin.png" alt="" />
                                @CS-Ticket System
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="bg-white rounded-full w-4 h-4" src="/facebook.png" alt="" />
                                @CS-Ticket System
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="text-black bg-white rounded-full w-4" src="/linkdin.png" alt="" />
                                @CS-Ticket System
                            </div>

                            <div className="flex items-center gap-2">
                                <img src="/help.png" alt="" /> support@cst.com
                            </div>
                        </div>

                    </div>
                </div>


                <div className="  text-center pb-10 ">© 2025 CS — Ticket System. All rights reserved. </div>

            </div>
        </div>
    )
}