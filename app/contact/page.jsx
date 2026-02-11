"use client"

import toast from "react-hot-toast"


export default function ContactPage() {


    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        try {
            const res = await fetch(
                "http://localhost:5000/contact", // local backend
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
        <div className="min-h-screen sm: flex flex-col items-center justify-center bg-[#fffaf5] px-4">

            <h1 className="text-4xl font-bold text-center mb-2 text-[#043042]">
                Contact <span className="text-orange-500">Us</span>
            </h1>
            <div className="w-full max-w-xl rounded-2xl border border-orange-400 p-8 shadow-sm bg-white">

                
                <p className="text-center text-gray-600 mb-6">
                    Have questions? We're here to help!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-gray-500">
                    <input
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full placeholder-[#B2B8C1] rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="phone"
                        required
                        placeholder="Phone Number"
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        title="Please enter a valid 10-digit phone number"
                        className="w-full placeholder-[#B2B8C1] rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="location"
                        placeholder="Location"
                        required
                        className="w-full placeholder-[#B2B8C1] rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="pageUrl"
                        type="url"
                        placeholder="Enter URL of the page"
                        title="Please enter a valid URL (https://example.com)"
                        required
                        className="w-full placeholder-[#B2B8C1] rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <textarea
                        name="message"
                        required
                        placeholder="Write your message here..."
                        rows={4}
                        className="w-full placeholder-[#B2B8C1] rounded-lg border border-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full placeholder-[#B2B8C1] rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}




//"use client"
//import { useActionState } from "react"
//import { createContact } from "./actions"
//export default function ContactPage() {
//    const [state, formAction] = useActionState(createContact, null)
//    return (
//        <form action={formAction}>
//            <input name="name" required />
//            <input name="phone" required />
//            <input name="location" />
//            <input name="pageUrl" />
//            <textarea name="message" required />
//            <button type="submit">Send</button>
//            {state?.error && <p>{state.error}</p>}
//            {state?.success && <p>Saved</p>}
//        </form>
//    )
//}