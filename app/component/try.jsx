"use client"

import { useState } from 'react';
import Link from "next/link"
import {
  Search,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react"


const books = [
  {
    id: 1,
    image: "/godaan.png",
    name: "Godaan",
    author: "Munshi Premchand",
    price: "₹250",
    details: "Godaan (Hindi: गोदान, Urdu: گودان, romanized: gōdān, lit.: cow donation) is a Hindi novel by Munshi Premchand. It was first published in 1936 and is considered one of the greatest novels of modern Indian literature. Themed around the socio-economic deprivation as well as the exploitation of the village poor, the novel was the last complete novel of Premchand. It follows the story of an old poor farmer, stuck in a debt trap, who wants to purchase a cow, but is unable to do so for lack of money. It was translated into English in 1957 by Jai Ratan and Purushottama Lal as The Gift of a Cow.",
    goto: "/auth/5"
  },
  {
    id: 2,
    image: "/madhushala.png",
    name: "Madhushala",
    author: "Harivansh Rai Bachchan",
    price: "₹200",
    details: "The poet tries to explain the complexity of life with his four instruments, which appear in almost every verse: madhu, madira or hala (wine), saki (server), pyala (cup or glass) and of course madhushala, madiralaya (pub or bar).",
    goto: "/auth/5"
  },
  {
    id: 3,
    image: "/ragdarbari.png",
    name: "Raag Darbari",
    author: "Shrilal Shukla",
    price: "₹300",
    details: "Raag Darbari (राग दरबारी) is a landmark Hindi novel written by Shrilal Shukla (श्रीलाल शुक्ल) and first published in 1968. It's widely regarded as one of the sharpest, most biting satirical works in modern Hindi literature.",
    goto: "/auth/5"
  },
  {
    id: 4,
    image: "/mailaaanchal.png",
    name: "Maila Anchal",
    author: "Phanishwar Nath Renu",
    price: "₹280",
    details: "It is a regional novel in true sense as local colour is reflected in it by means of dialect, life style, superstitions and beliefs, festivals and culture of the rural people. The characters are fit to the region and they are guided by the regional characteristics . The region becomes to be a living character and plays a great role in leading the characters to the catastrophe",
    goto: "/auth/5"
  },
  {
    id: 5,
    image: "/ardhanarishwar.png",
    name: "Ardhanarishwar",
    author: "Vishnu Prabhakar",
    price: "₹220",
    details: "Ardhanarishwar (meaning The Androgynous God or Shiva) is a Hindi novel by Indian writer Vishnu Prabhakar, published in 1992. It won the 1993 Sahitya Akademi Award for Hindi, given by Sahitya Akademi, India's National Academy of Letters.",
    goto: "/auth/5"
  },
  {
    id: 6,
    image: "/gaban.png",
    name: "Gaban ग़बन",
    author: "Munshi Premchand",
    price: "₹300",
    details: "Through this novel, Munshi Premchand tries to show the falling moral values among lower middle class Indian youth in the era of British India, and to what depths a person can descend to, to become a pseudo-elite, and maintain a false image as a rich person. Gaban is a cult classic satire of Premchand.",
    goto: "/auth/5"
  },
];

export default function RegisterPage() {

  const [active, setActive] = useState('login');

  const [current, setCurrent] = useState("Discover");


  // for Cards
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? books.length - 3 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 3 >= books.length ? 0 : prev + 1));
  };


  return (
    <>
      <div className="min-h-screen bg-[#F8F5FF]">
        {/* Top nav – keep minimal but fix inconsistent colors */}

        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-6 md:px-12">
         
            
          
            <img src="./logo2.png" className="px-2 h-auto w-[70px] sm:w-[80px] md:w-[100px] lg:w-[170px]" alt="logo" />
          

          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/"
              className={`text-[#6B4E9D] 
                      ${current === "Discover" ? "bg-[#BA96BC] rounded-4xl text-[#FFFFFF] px-3 py-1" : "border-b-2 border-transparent"}`}
              onClick={() => setCurrent("Discover")}
            >
              Discover
            </Link>
            <Link href="/"
              className={`text-[#6B4E9D] 
                      ${current === "Category" ? "bg-[#BA96BC] rounded-4xl text-[#FFFFFF] px-3 py-1" : "border-b-2 border-transparent"}`}
              onClick={() => setCurrent("Category")}
            >
              Category
            </Link>
            <Link href="/"
              className={`text-[#6B4E9D] 
                      ${current === "Shelf" ? "bg-[#BA96BC] rounded-4xl text-[#FFFFFF] px-3 py-1" : "border-b-2 border-transparent"}`}
              onClick={() => setCurrent("Shelf")}
            >
              My Shelf
            </Link>


            {/* login and register */}


            <div className="flex items-center gap-4 md:gap-1 rounded-full bg-[#BA96BC] border-2 border-[#602E67]">
              {/* Login – subtle, outlined or light bg */}
              <button
                onClick={() => { /* login logic or router.push('/login') */ }}
                className={`
                                    px-6 py-2 text-[#6B4E9D] font-medium z-50
                                    bg-[#BA96BC] rounded-full 
                                    
                                     ${current === "login" ? "bg-[#BA96BC] rounded-4xl text-[#FFFFFF] px-3 py-1" : "border-b-2 border-transparent"}
                                    `}
              >
                Login
              </button>

              {/* Get Started – solid, primary accent, stands out more */}
              <button
                onClick={() => { /* signup logic */ }}
                className="
                                    px-6 py-2 text-[#6B4E9D] font-medium z-50
                                    bg-white/20 backdrop-blur-sm border border-[#A78BFA]/40
                                    hover:bg-[#A78BFA]/20 hover:border-[#A78BFA]/60 hover:text-white
                                    rounded-full transition-all duration-300 shadow-sm hover:shadow-md
                                    "
              >
                Get Started
              </button>

              
            </div>



          </div>
        </nav>

        {/* Hero – true center alignment with left/right images */}
        <div className="flex items-center justify-center px-4 md:px-12 pt-32 pb-20">
          <div className="relative w-full max-w-7xl flex items-center justify-between gap-8 lg:gap-16">
            {/* LEFT IMAGE – girl reading (cozy side) */}
            <div className="hidden lg:block w-1/3 max-w-[380px] aspect-[3/4] overflow-hidden">
              <img
                src="/girl_read.png"  // replace with better one if needed
                alt="Girl immersed in a book"
                className="h-full w-full object-contain transition-transform duration-700 hover:scale-105 shadow-2xl"
              />
            </div>

            {/* CENTER – text block, perfectly centered */}
            <div className="flex flex-col items-center text-center flex-1 max-w-2xl z-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold text-[#602E67] tracking-tight leading-none mb-6">
                MY LIBRARY
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#6B4E9D] font-light mb-10 md:mb-12 max-w-3xl">
                Daily Synchronicity with Stories That Stay
              </p>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <button className="px-10 py-4 bg-[#7C3AED] text-white text-lg md:text-xl rounded-full hover:bg-[#6B2EE0] transition shadow-lg">
                  Explore Books
                </button>
                <button className="px-10 py-4 border-2 border-[#A78BFA] text-[#6B4E9D] text-lg md:text-xl rounded-full hover:bg-[#A78BFA]/10 transition">
                  Browse Categories
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE – magical book stack (mystical side) */}
            <div className="hidden lg:block w-1/3 max-w-[380px] aspect-[3/4] overflow-hidden ">
              <img
                src="/stackedbook.png"
                alt="Magical floating books"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 shadow-2xl"
              />
            </div>
          </div>



        </div>


        {/* card section */}

        <div className="relative py-20 bg-[#F8F5FF]">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-0  p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          {/* Cards Container */}
          <div className="flex overflow-hidden w-[95%] gap-4 px-2">
            {books.slice(startIndex, startIndex + 3).map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 w-[30%] bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
              >
                {/* Book Image */}
                <div className="h-40 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={book.image}
                    alt={book.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Book Info */}
                <div className="mt-3 flex flex-col gap-1 justify-start">
                  <h3 className="font-semibold text-xl">{book.name}</h3>

                  {/* This is the key row: left = author + price vertical, right = Visit */}
                  <div className="flex items-start justify-between gap-4 py-2">
                    {/* Left column – author and price stacked vertically */}
                    <div className="flex flex-col items-start ">
                      <p className="text-gray-500 text-sm">{book.author}</p>
                      <p className="text-green-600 font-medium text-sm">{book.price}</p>
                    </div>

                    {/* Right side – Visit link/button */}
                    <a
                      href={book.goto}
                      className="px-4 py-1.5 bg-[#2A7F7F] hover:bg-blue-700 text-white text-md font-medium rounded-md transition whitespace-nowrap"
                    >
                      Visit
                    </a>
                  </div>

                  <p className="text-gray-700 text-sm line-clamp-3">{book.details}</p>
                </div>

              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-0 z-0 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

        </div>

      </div>


     <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1.5 shadow-inner">
      {/* Sliding pill background */}
      <div
        className={`absolute inset-y-1.5 left-1.5 w-1/2 bg-white rounded-full shadow-md transition-all duration-300 ease-out transform ${
          active === 'register' ? 'translate-x-full' : ''
        }`}
      />

      {/* Login button */}
      <button
        onClick={() => setActive('login')}
        className={`relative z-10 px-6 py-2.5 text-sm font-medium transition-colors ${
          active === 'login' ? 'text-indigo-700' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Login
      </button>

      {/* Register button */}
      <button
        onClick={() => setActive('register')}
        className={`relative z-10 px-6 py-2.5 text-sm font-medium transition-colors ${
          active === 'register' ? 'text-indigo-700' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Register
      </button>
    </div>
     

    </>
  );
}