"use client"

import toast from "react-hot-toast"
import {  Heart } from "lucide-react"

export default function FavouritePage() {


    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/favourite`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            )

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error || "Error submitting form")
            } else {
                toast.success("Saved successfully")
                e.target.reset()
            }
        } catch (err) {
            toast.error("Backend not reachable")
        }
    }

   

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#F4EAD5] px-4 pt-10">

           

            <div className="w-full max-w-xl rounded-2xl border border-orange-400 p-8 shadow-sm bg-white">

                <h1 className=" flex text-[45px] font-bold text-center justify-center mb-2 text-[#FFB6C1]">
                Favourites <span className="text-[#FFB6C1] "><Heart fill="currentColor" /> </span>
            </h1> 
            </div>
        </div>
    )
}
