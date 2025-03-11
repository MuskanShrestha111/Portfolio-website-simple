
'use client';
import React from 'react';
import Link from 'next/link';

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          My Skills
        </h1>
        <p className="text-lg sm:text-xl text-[#ADB7BE]">
          Here's a collection of technologies and tools I am proficient with.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg bg-[#181818] p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Frontend
          </h3>
          <ul className="space-y-4 text-[#ADB7BE]">
            
            <li>Next.js</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="rounded-lg bg-[#181818] p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Backend
          </h3>
          <ul className="space-y-4 text-[#ADB7BE]">
            <li>Node.js</li>
            
            
            <li>MySQL</li>
            
          </ul>
        </div>

        <div className="rounded-lg bg-[#181818] p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Tools & Others
          </h3>
          <ul className="space-y-4 text-[#ADB7BE]">
            <li>Git & GitHub</li>
            
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-green-800 hover:text-white transition duration-300">
            Back
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
