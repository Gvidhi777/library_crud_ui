"use client"

import { useState } from "react"
import { ChevronDown, Home, House, Menu, X, LibraryBig, Download, BookHeart, Settings, LogOut } from "lucide-react"
import { createPortal } from "react-dom";
import Link from "next/link"


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const [active, setActive] = useState("Discover");

  const [logged, setLogged] = useState(false);

  const handleLogout = () => {
    // loggin logic here
    // End session logic here
    console.log("Session ended");
    // For example, clear localStorage, cookies, or call API
  };

  return (

    <div className='fixed left-0 top-0 h-screen w-47 justify-between items-center bg-[#DCEFEA] pt-5'>
      
      <div className='flex items-center justify-center' >
        <img src="./logo.png" className="px-2 lg:mt-5 h-auto w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px]" alt="logo" />
      </div>

      <div className='hidden lg:block w-[50%] h-full items-center justify-center mt-20'>
        <ul className="w-full flex flex-col gap-6 items-start text-xl font-medium text-[#1E2D2F] ml-10 mt-6">
          <li>
            <Link href="/"
              className={`flex gap-1 group transition-all duration-300 
                      ${active === "Discover" ? "border-b-2 border-[#1E2D2F]" : "border-b-2 border-transparent"}`}
              onClick={() => setActive("Discover")}
            >
              <House /> Discover
            </Link>
          </li>

          <li>
            <Link href="/category"
              className={`flex gap-1 group transition-all duration-300
                      ${active === "Category" ? "border-b-2 border-[#1E2D2F]" : "border-b-2 border-transparent"}`}
              onClick={() => setActive("Category")}
            >
              <LibraryBig /> Category
            </Link>
          </li>

          <li>
            <Link href="/download"
              className={`flex gap-1 group transition-all duration-300
                      ${active === "Download" ? "border-b-2 border-[#1E2D2F]" : "border-b-2 border-transparent"}`}
              onClick={() => setActive("Download")}
            >
              <Download /> Download
            </Link>
          </li>

          <li>
            <Link href="/favourite"
              className={`flex gap-1 group transition-all duration-300
                      ${active === "Favourite" ? "border-b-2 border-[#1E2D2F]" : "border-b-2 border-transparent"}`}
              onClick={() => setActive("Favourite")}
            >
              <BookHeart /> Favourite
            </Link>
          </li>

          <span className="block border-t border-[#1E2D2F] my-5 w-full" />

          <li>
            <Link href="/settings"
              className={`flex gap-1 group transition-all duration-300
                      ${active === "Settings" ? "border-b-2 border-[#1E2D2F]" : "border-b-2 border-transparent"}`}
              onClick={() => setActive("Settings")}
            >
              <Settings /> Settings
            </Link>
          </li>

          <li>
            {/* Logout button */}
            <button
              onClick={() => setLogged(true)}
              className={`flex gap-1 group transition-all duration-300 border-b-2 border-transparent hover:border-[#1E2D2F]`}
            >
              <LogOut /> Logout
            </button>

            {/* Confirmation Modal */}
            {logged &&
              createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                    <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
                    <p className="text-gray-600 mb-6">
                      Do you really want to logout? This will end your session.
                    </p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Yes, Logout
                      </button>
                      <button
                        onClick={() => setLogged(false)}
                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>,
                document.body
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
