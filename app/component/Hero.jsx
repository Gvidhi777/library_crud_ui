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


const Home = () => {

  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? books.length - 3 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 3 >= books.length ? 0 : prev + 1));
  };

  return (
    <div className="w-full ml-8 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-0 bg-[#FBFAFE] z-0">

      {/* for buttons : #2A7F7F */}

      <div className='h-20 w-full flex justify-end items-center bg-[#DCEFEA] shadow-sm'>

        <ul className="w-full h-full pr-20 flex gap-6 items-center justify-end text-xl font-medium ">

          <li className="w-full flex justify-end items-center px-4">
            {/* Search */}
            <div className="w-full max-w-md flex items-center border border-[#A7B1FF] bg-white rounded-full overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-[#F9A629] focus-within:shadow-md" >
              <input
                type="search"
                placeholder="Explore Books, Authors, and more..."
                className="flex-1 px-4 py-2 text-sm sm:text-base outline-none bg-transparent relative z-50"

              />
              <button className="w-12 h-12 sm:w-11 sm:h-11 bg-[#1E2D2F] flex items-center justify-center hover:bg-[#eb5d13]">
                <Search className="text-white" size={18} />
              </button>
            </div>

          </li>

          <li>
            <Link href="/auth">
              <User className="text-[#1E2D2F] w-6 h-6" />
            </Link> </li>
        </ul>

      </div>
      {/* HERO */}
      <div className="w-full max-w-5xl flex flex-col items-center text-center mt-8 lg:mt-14">

        {/* Title */}
        <h1 className="font-thin md:font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug flex flex-col items-center justify-center text-center">
          <span className="text-[#9F8ACB]">Discover Your Next Great Read</span>

          <span className="text-[#5FB3A5] text-2xl">Explore thousands of books, journals, and digital resources.</span>
        </h1>



        {/* Description */}
        <p className="hidden md:block mt-6 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed px-2">
          Welcome to your digital reading space — a place to explore, learn, and grow. Browse curated collections, discover new favorites, and enjoy a calm environment built for readers of all kinds.
        </p>


        {/* card section */}

        <div className="w-full relative z-0 flex items-center justify-center ">
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

    </div>

  )
}

export default Home