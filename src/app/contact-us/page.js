'use client'
import { useState, useRef } from "react"

export default function ContactUs() {
    const [successMessage, setSuccessMessage] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    async function handleform(formData) {
        const fd = {
            full_name: formData.get('full_name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            message: formData.get('message')
        }
        console.log(formData);
        try {
            const res = await fetch('http://127.0.0.1:8000/api/contact', {
                method: 'POST',
                body: JSON.stringify(fd),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const resData = await res.json()
            if (res.ok) {
                setSuccessMessage(true)
                setErrMessage('')
            } else {
                setErrMessage('Please fill all fields correctly.');
                setSuccessMessage(false);
            }
        } catch (error) {
            setErrMessage('Something went wrong. Please try again.');
            setSuccessMessage(false);
        }


    }
    return (
        <section className="py-12 pt-40 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
                    <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
                        <div className="flex-1">
                            <p className="text-sm font-normal tracking-widest uppercase">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Have a project in mind? </span>
                            </p>
                        </div>

                        <div className="mt-6 lg:mt-auto">
                            <h2 className="text-3xl font-normal text-gray-700 sm:text-4xl lg:text-5xl xl:text-6xl">We help you to grow your business faster & easier.</h2>
                            <p className="mt-4 text-base font-normal text-gray-400 lg:max-w-xs sm:text-lg sm:mt-6">Tell us about your project and make it reach hundereds of people</p>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-center">
                        <div className="absolute right-0 transform translate-x-4 -translate-y-1/2 top-1/2">
                            <svg
                                className="filter blur-[64px]"
                                width="619"
                                height="371"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M355.661 40.206C507.908 40.206 619-61.411 619 58.454 619 178.319 219.912 371 67.665 371s0-192.681 0-312.546c0-119.865 135.749-18.248 287.996-18.248Z"
                                    fill="url(#e)"
                                />
                                <defs>
                                    <linearGradient
                                        id="e"
                                        x1="0"
                                        y1="371"
                                        x2="36.57"
                                        y2="-50.529"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0%" style={{ stopColor: '#05131c' }} />
                                        <stop offset="100%" style={{ stopColor: '#05131c' }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="relative overflow-hidden bg-[#05131c] rounded-xl">
                            <div className="p-6 sm:py-8 sm:px-9">
                                <p className="text-xl font-normal text-white">Let us know about your project & we will help you grow your business from scratch.</p>

                                <form action={handleform} className="mt-8 space-y-4">
                                    <div>
                                        <label htmlFor="" className="sr-only"> Full name </label>
                                        <div>
                                            <input type="text" name="full_name" id="name" placeholder="First & Last name" className="block w-full px-5 py-4 text-lg border border-gray-400 text-white placeholder-gray-500 bg-[#05131c] rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="sr-only"> Email address </label>
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email address" className="block w-full px-5 py-4 text-lg border border-gray-400 text-white placeholder-gray-500 bg-[#05131c] rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="sr-only"> Phone number </label>
                                        <div>
                                            <input type="tel" name="mobile" id="mobile" placeholder="Phone number" className="block w-full px-5 py-4 text-lg border border-gray-400 text-white placeholder-gray-500 bg-[#05131c] rounded-md focus:border-white focus:ring-1 focus:ring-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="" className="sr-only"> Message </label>
                                        <div>
                                            <textarea name="message" id="message" placeholder="Write your message" rows="4" className="block w-full px-5 py-4 text-lg border border-gray-400 text-white placeholder-gray-500 bg-[#05131c] rounded-md resize-y focus:border-white focus:ring-1 focus:ring-white"></textarea>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative inline-flex mt-2 group">
                                            <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                            <button type="submit" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-[#05131c] border border-transparent rounded-md" role="button">Send Message</button>
                                        </div>
                                    </div>
                                    {
                                        successMessage && <div className="text-green-600 bg-green-200 border border-2 border-green-600 py-4 px-2 rounded-lg">
                                            ThankYou. We will reach you out soon
                                        </div>
                                    }
                                    {
                                        errMessage && <div className="bg-red-200 p-5 rounded-lg font-semibold border border-2 border-red-500">
                                            {errMessage}
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}