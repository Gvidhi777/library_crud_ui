"use client"

import { useState } from "react"
import { ChevronDown, Home, House, Menu, X, LibraryBig, Download, BookHeart, Settings, LogOut } from "lucide-react"
import Link from "next/link"


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const [menu, setMenu] = useState(false);

	const [active, setActive] = useState("Discover");


    return (

        <div className='h-screen w-54 justify-between items-center bg-[#E9FDFF] '>
            <div className='flex items-center' >
			<img src="./logo.jpeg" className="px-2 lg:mt-5 h-auto w-[180px] sm:w-[250px] md:w-[260px] lg:w-[290px]" alt="logo" />
			</div>

           

            <div className='hidden lg:block w-[50%] h-full items-center justify-center'>
			  <ul className="w-full h-full flex flex-col gap-6 items-start justify-center text-xl font-medium text-[#A7B1FF] ml-10">

				<li>
				  <Link href="/discover" 
					className={`flex gap-1 group transition-all duration-300 
					  ${active === "Discover" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Discover")}
				  >
					<House /> Discover
				  </Link>
				</li>

				<li>
				  <Link href="/category" 
					className={`flex gap-1 group transition-all duration-300
					  ${active === "Category" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Category")}
				  >
					<LibraryBig /> Category
				  </Link>
				</li>

				<li>
				  <Link href="/download" 
					className={`flex gap-1 group transition-all duration-300
					  ${active === "Download" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Download")}
				  >
					<Download /> Download
				  </Link>
				</li>

				<li>
				  <Link href="/favourite" 
					className={`flex gap-1 group transition-all duration-300
					  ${active === "Favourite" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Favourite")}
				  >
					<BookHeart /> Favourite
				  </Link>
				</li>

				<span className="block border-t border-[#A7B1FF] my-5 w-full" />

				<li>
				  <Link href="/settings" 
					className={`flex gap-1 group transition-all duration-300
					  ${active === "Settings" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Settings")}
				  >
					<Settings /> Settings
				  </Link>
				</li>

				<li>
				  <Link href="/logout" 
					className={`flex gap-1 group transition-all duration-300
					  ${active === "Logout" ? "border-b-2 border-[#A7B1FF]" : "border-b-2 border-transparent"}`}
					onClick={() => setActive("Logout")}
				  >
					<LogOut /> Logout
				  </Link>
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

                    <span className="h-[1px] bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Banned Hashtags
                    </li>

                    <span className="h-[1px] bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Couple Hashtags
                    </li>

                    <span className="h-[1px] bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Trending Hashtags
                    </li>

                    <span className="h-[1px] bg-orange-400 mx-4" />

                    <li className="px-6 py-3 hover:text-amber-400 cursor-pointer">
                        Blogs
                    </li>

                    <span className="h-[1px] bg-orange-400 mx-4" />

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
