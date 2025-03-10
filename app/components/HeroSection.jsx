'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center flex flex-col text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Hello, I am
            </div>

            <TypeAnimation
              sequence={['Muskan', 1000, 'Student', 1000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            I study CSIT. I love learning.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-amber-100 text-black">
              Hire Me
            </button>

            
            <Link href="/cv">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-green-800 border border-white mt-3">
                View CV
              </button>
            </Link>
          </div>
        </div>

      
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] flex flex-col w-[300px] h-[350px] lg:w-[300px] lg:h-[350px] relative">
            <img
              src="/images/image.png"
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
