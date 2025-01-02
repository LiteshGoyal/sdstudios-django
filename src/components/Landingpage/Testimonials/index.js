import { Code, Wallet, Edit, Clock, Shield, HelpCircle } from "lucide-react";
import Image from "next/image";
const testimonials = [
  {
    desc: "SpringDjango Studios brought our website to life with ease! They understood our requirements perfectly and delivered a professional, fully functional site in no time. Recommended!",
    company_img_url: "https://www.quark.com/assets/LOGO-RGB_Quark-Corporate-2023_DARK-R_v7-2.webp",
    name: "Hemant Sharma",
    profile_img_url: '/testimonials/Hemant.jpeg',
  },
  {
    desc: "Working with SpringDjango Studios was a breeze! They let us choose our preferred tech stack, and the final product exceeded our expectations. Exceptional quality without breaking the bank!",
    company_img_url: "data:image/png;base64,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",
    name: "Litesh Goyal",
    profile_img_url: '/testimonials/Litesh.jpeg',
  },
  {
    desc: "SpringDjango Studios transformed our vision into reality with their website-building services. They listened to every detail, provided expert suggestions, and the result was stunning. Couldn't be happier!",
    company_img_url: "https://www.auxiliobits.com/wp-content/uploads/2024/09/dark-logo-2048x305.webp",
    name: "Aryan Vashisht",
    profile_img_url: '/testimonials/Aryan.png',
  },
];
export default function Testimonials() {
  return (
    <section className="py-12 bg-[#05131c] sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl  sm:space-y-4 sm:block md:flex space-x-8 mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-100 sm:text-2xl xl:text-4xl ">
            Don't just take our words. Many people trust us.
          </h2>
          <div className="w-px sm:h-0 md:h-20 bg-gray-600"></div>
          <h3 className="text-2xl text-green-600 font-bold my-auto">
            Testimonials
          </h3>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 sm:mt-16 lg:grid-cols-3 lg:max-w-none">
          {testimonials.map((feature, index) => (
            <div key={index} className="flex">
              <div
                className={`flex flex-col justify-between bg-white rounded-2xl transition-transform transform ${
                  index % 2 === 0 ? "-rotate-2" : "rotate-2"
                } hover:rotate-0 hover:bg-gray-100`}
                style={{ height: "100%" }}
              >
                <div className="p-8 flex flex-col flex-grow">
                  <blockquote>
                    <p className="text-lg font-medium leading-9 text-gray-900">
                      {feature.desc}
                    </p>
                  </blockquote>
                  <p className="mt-6 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-gray-200 p-8">
                  <img
                    className="w-auto h-7"
                    src={feature.company_img_url}
                    alt=""
                  />
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={feature.profile_img_url}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
