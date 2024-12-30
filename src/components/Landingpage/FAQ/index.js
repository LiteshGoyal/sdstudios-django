"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp, ChevronLeft } from "lucide-react";

const faqs = [
  {
    question: "What services does SpringDjango Studios provide?",
    answer:
      "We specialize in affordable website-building services tailored to your needs. Whether you prefer Django, Java, or another tech stack, we bring your ideas to life with high-quality, customizable solutions.",
  },
  {
    question: "Can I choose the tech stack for my website?",
    answer:
      "Absolutely! We support Django, Java, and other popular tech stacks to build websites that align with your preferences and requirements.",
  },
  {
    question: "How does the development process work?",
    answer:
      "After an initial consultation, we’ll plan your project, build the website, and provide iterations based on your feedback. Once approved, we’ll launch it live.",
  },
  {
    question: "Do you offer ongoing support after the website is built?",
    answer:
      "Yes, we provide maintenance packages to ensure your website stays up-to-date, secure, and performs optimally.",
  },
  {
    question: "Who is SpringDjango Studios ideal for?",
    answer:
      " Our services cater to startups, small businesses, and individuals looking for professional websites without exceeding their budget.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Yes, we offer additional services like SEO optimization to help your website gain visibility",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#05131c] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto flex mb-12">
          <div className="mx-auto ms-0 text-left">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">Frequently Asked</h1>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">Questions</h2>
          </div>
          <div className="mx-auto">
            <button className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary ">
                <Link href="/contact" className="flex text-center">
                    Learn More <ChevronRight className="my-auto"/>
                </Link>
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center py-4 text-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="ml-4">
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-400 text-lg pb-4 pl-4">{faq.answer}</div>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}
