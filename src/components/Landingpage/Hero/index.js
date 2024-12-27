'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ComponentName = () => {
    return (
        // sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 ">
            {/**/}

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-60" src="/Hero/hero-bg2.webp"  alt="" />
            </div>

            <div className="relative mx-auto lg:flex">
                <div className="px-6 mt-8 mx-auto sm:px-8 lg:px-12">
                    <div className=" mx-auto text-center">
                        <h1 className="tracking-tighter text-white text-left">
                            <span className="font-sans font-normal text-4xl text-left">Custom Websites</span><br />
                            <span className="font-serif italic font-normal text-8xl">Built Your Way</span>
                        </h1>
                        <p className="max-w-xl mt-5 font-sans text-base font-normal text-white">At SpringDjango Studios, we deliver professional websites tailored to your needs—fast, reliable, and at an unbeatable price. Choose your tech stack—Django, Java, or anything else—and let us handle the rest.</p>
                        <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
                            <Link
                                href="/dashboard"
                                title=""
                                className=" inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-xl text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary hover:scale-110"
                                role="button"
                            >
                                Get started
                            </Link>

                            
                        </div>
                    </div>
                </div>
                <div className='text-white mx-auto hidden lg:block border-8 border-gray-800 rounded-xl' >
                    <Image src="/Hero/heroimg.avif" alt="HeroImage" className='rounded' width={400} height={200} />
                </div>
            </div>

            
        </div>

    )
}
export default ComponentName;