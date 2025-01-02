import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
export default function AboutUs() {
  return (
    <div className="md:pt-40 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl xl:text-4xl font-bold text-gray-800">About SpringDjango Studios</h1>
          <p className="text-lg text-gray-600 mt-4">
            At SpringDjango Studios, we craft exceptional websites tailored to your technology preferences, offering affordability and quality hand in hand.
          </p>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                SpringDjango Studios was founded with a mission to empower businesses and individuals by providing top-notch website-building services. Whether you prefer Django, Java, or another tech stack, our team ensures your ideas are transformed into functional, beautiful websites that reflect your brand.
              </p>
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/about/ab2.jpg"
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="/testimonials/Litesh.jpeg"
                  alt="Litesh Goyal"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Litesh Goyal</h3>
              <p className="text-gray-600 text-lg mt-2">Founder</p>
              <div className="mt-4 flex space-x-4">
                <Link href="https://www.linkedin.com/in/litesh-goyal-8b6225211/" className="text-blue-600 hover:text-blue-800" target="_blank">
                  <Linkedin className='bg-[#05131c] rounded-lg w-8 h-8 p-2 text-white'/>
                </Link>
                <Link href="https://github.com/LiteshGoyal" className="text-gray-800 hover:text-gray-600" target="_blank">
                  <Github className='bg-[#05131c] rounded-lg w-8 h-8 p-2 text-white'/>
                </Link>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="/testimonials/Hemant.jpeg"
                  alt="Hemant Sharma"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Hemant Sharma</h3>
              <p className="text-gray-600 text-lg mt-2">Co-Founder</p>
              <div className="mt-4 flex space-x-4">
                <Link href="https://www.linkedin.com/in/reachout-hemant/" className="text-blue-600 hover:text-blue-800" target="_blank">
                <Linkedin className='bg-[#05131c] rounded-lg p-2 text-white w-8 h-8'/>
                </Link>
                <Link href="https://github.com/sharmahemant03/sharmahemant03" className="text-gray-800 hover:text-gray-600" target="_blank">
                <Github className='bg-[#05131c] rounded-lg w-8 h-8 p-2 text-white'/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            We envision a world where every business, big or small, has access to affordable, high-quality web solutions. At SpringDjango Studios, we strive to make this a reality by combining technical excellence with customer-centric design.
          </p>
        </section>
      </div>
    </div>
  );
}
