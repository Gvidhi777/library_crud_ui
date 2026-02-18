"use client"

import { useState } from 'react';
import toast from "react-hot-toast"

export default function RegisterPage() {

    const [login, setLogin] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/contact`,
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
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm space-y-6">


                {!login && (
                    <>
                        {/* REGISTER */}
                        <div className="text-center space-y-2">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                Create Account
                            </h1>
                            <p className="text-sm text-gray-500">
                                Join as an author or reader
                            </p>
                        </div>


                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input name="name" required placeholder="Full Name" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            <input name="contact" required placeholder="Contact Number" pattern="[0-9]{10}" inputMode="numeric" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            <input name="email" type="email" required placeholder="Email Address" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            <input name="password" type="password" required placeholder="Password" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />

                            {/* Role Selection */}

                            <div className="flex gap-4">
                                Are you
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="role" value="author" required /> Author </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="role" value="reader" required /> Reader
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition" > Register </button>
                        </form>

                        <p className="text-sm text-center text-gray-500">
                            Already a user?{" "}
                            <span
                                onClick={() => setLogin(true)}
                                className="text-green-600 cursor-pointer hover:underline"
                            >
                                Login
                            </span>
                        </p>
                    </>
                )}

                {login && (
                    <>
                        {/* LOGIN */}
                        <h2 className="text-lg font-medium text-gray-700 text-center">
                            Login
                        </h2>



                        <form className="space-y-4">
                            <input name="loginEmail" type="email" required placeholder="Email Address" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            <input name="loginPassword" type="password" required placeholder="Password" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
                            <div className="flex gap-4">
                                Are you
                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="role" value="author" required />
                                    Author </label>

                                <label className="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="radio" name="role" value="reader" required /> Reader
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition" > Login </button>
                        </form>

                        <p className="text-sm text-center text-gray-500">
                            Don’t have an account?{" "}
                            <span
                                onClick={() => setLogin(false)}
                                className="text-green-600 cursor-pointer hover:underline"
                            >
                                Register
                            </span>
                        </p>
                    </>
                )}

            </div>

        </div>

    )
}
