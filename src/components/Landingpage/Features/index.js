import { Code, Wallet, Edit, Clock, Shield, HelpCircle } from "lucide-react";
import Image from "next/image";
const features = [
  {
    icon: Code,
    title: "Flexible Tech Stack",
    desc: "Whether you prefer Django, Java, or another platform, we adapt your chosen technology to deliver website that aligns with your goals.",
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
  {
    icon: Clock,
    title: "Scalable and Secure",
    desc: "Our websites are built to grow with your business while maintaining the highest standards of security.",
  },
  {
    icon: Shield,
    title: "Affordable Pricing",
    desc: "Professional websites shouldn’t cost a fortune. We offer competitive rates with no hidden fees.",
  },
  {
    icon: HelpCircle,
    title: "Dedicated Support",
    desc: "From project kickoff to post-launch, our team is here to assist you every step of the way.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto space-x-8 text-center flex xl:max-w-2xl">
          <h4 className="text-2xl text-green-600 font-bold my-auto">Features</h4>

          <div className="w-px h-20 bg-gray-600"></div>
          <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-2xl xl:text-4xl font-pj">
            Custom Websites, Built with Your Vision in Mind
          </h2>
        </div>

        <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => (
            <div key={index} className="">
              <div className="overflow-hidden bg-white shadow-md rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="p-9">
                <feature.icon className="w-10 h-10 mx-auto text-green-600 sm:mx-0" />
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 font-pj">
                    {feature.title}
                  </h3>
                  <p className="mt-6 text-lg text-gray-600 font-pj">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
