"use client"

import { useState } from "react"
import { ChevronDown, Home, Menu, X } from "lucide-react"
import Link from "next/link"


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const [menu, setMenu] = useState(false);

    return (

        <div className='w-full flex justify-between h-20 items-center bg-[#043042]'>
            <div className='flex items-center p-1' >
                <img src="/logo.png" className=' px-2 fixed h-auto max-w-[100px] md:max-w-[120px] lg:max-w-[170px]' alt="logo" />
            </div>

            <button
                onClick={() => setMenu(true)}
                className="md:hidden text-white text-3xl px-2"
            >
                <Menu className="text-[#F9A629] text-4xl" />
            </button>

            <div className='hidden lg:block w-[50%] h-full'>
                <ul className="w-full h-full flex gap-6 items-center justify-center text-xl font-medium text-zinc-100">
                    <li className="cursor-pointer hover:text-amber-500 border-b-2 border-transparent hover:border-orange-500">
                        <Link
                            href="/"
                        >
                            <Home />
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Trending Hashtags
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Banned Hashtags
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Couple Hashtags
                    </li>



                    {/* MORE DROPDOWN */}
                    <li className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 hover:text-amber-500"
                        >
                            More
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${open ? "rotate-180" : "" }`}
                            />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-4 w-64 bg-[#043042] text-white rounded-md shadow-lg overflow-hidden">
                                <Link
                                    href="/contact"
                                    className="block px-6 py-4 text-xl text-orange-400 hover:bg-[#032530]"
                                >
                                    Contact Us
                                </Link>

                                {/* bottom accent line */}
                                <div className="h-1 bg-orange-400" />
                            </div>
                        )}
                    </li>

                </ul>
            </div>



            {/*small screen side hamburger menu for above list*/}


            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity
                ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenu(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-20 z-50
                w-70
                bg-[#043042]/70
                backdrop-blur-md
                shadow-xl
                transform transition-transform duration-300
                ${menu ? "translate-x-0" : "-translate-x-[120%]"}`}
             >

                {/* Close button */}
                <button
                    onClick={() => setMenu(false)}
                    className="absolute top-3 right-3 text-white text-xl"
                >
                    <X />
                </button>


                {/* Menu */}
                <ul className="pt-10 pb-4 flex flex-col text-lg font-medium text-zinc-100">

                    <li className="px-6 py-3 flex items-center gap-3 hover:text-amber-400 cursor-pointer">
                        <Link href="/" onClick={() => setMenu(false)} className="flex items-center gap-3">
                            <Home className="text-xl" />
                        </Link>
                    </li>

                    <span className="h-px bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Banned Hashtags
                    </li>

                    <span className="h-px bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Couple Hashtags
                    </li>

                    <span className="h-px bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Trending Hashtags
                    </li>

                    <span className="h-px bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Blogs
                    </li>

                    <span className="h-px bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        <Link
                            href="/contact" onClick={() => setMenu(false)} className="flex items-center gap-3"
                        >
                            Contact Us
                        </Link>
                    </li>

                </ul>

            </div>



        </div>

    )
}
export default Navbar;