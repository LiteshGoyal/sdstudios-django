import { Code, Wallet, Edit, Clock, Shield, HelpCircle } from "lucide-react";
import Image from "next/image";
const testimonials = [
    {
        icon: Code,
        title: "Flexible Tech Stack",
        desc: "Whether you prefer Django, Java, or another platform, we adapt to your chosen technology to deliver a website that aligns with your goals.",
    },
    {
        icon: Wallet,
        title: "Tailored Solutions",
        desc: "From e-commerce stores to corporate websites, we provide solutions that reflect your brand and meet your audience's needs.",
    },
    {
        icon: Edit,
        title: "Fast Delivery",
        desc: "We understand the importance of time. That’s why we ensure quick turnarounds without compromising quality.",
    },
];
export default function Testimonials() {
    return (
        <section className="py-12 bg-[#05131c] sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl flex space-x-8 mx-auto text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
                        Don't just take our words. Many people trust us.
                    </h2>
                    <div className="w-px h-20 bg-gray-600"></div>
                    <h3 className="text-2xl text-green-600 font-bold my-auto">Testimonials</h3>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none">
                    {testimonials.map((feature, index) => (
                        <div key={index} className="">
                            <div
                                className={`bg-white rounded-2xl transition-transform transform ${
                                    index % 2 === 0 ? "-rotate-2" : "rotate-2"
                                } hover:rotate-0 hover:bg-gray-100`}
                            >
                                <div className="p-8">
                                    <blockquote>
                                        <p className="text-xl font-medium leading-9 text-gray-900">
                                            "We love Spring! Our designers were using it for their projects, so clients already knew what
                                            Landingfolio was and
                                            how to use it."
                                        </p>
                                    </blockquote>
                                    <p className="mt-6 text-base font-semibold text-gray-900">
                                        Bessie Cooper
                                    </p>
                                    <p className="mt-1 text-base font-normal text-gray-600">
                                        Co-Founder, CEO
                                    </p>
                                    <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200">
                                        <img className="w-auto h-7" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/alterbone.svg" alt="" />
                                        <img className="object-cover w-10 h-10 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-male-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
