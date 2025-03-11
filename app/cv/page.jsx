
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CV = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">My CV</h1>
      <p className="text-lg mb-4">You can download my CV from the link below:</p>

      <div className="relative mb-8">
        {isClient ? (
          <iframe
            src="/CV.pdf"
            width="100%"
            height="800px"
            frameBorder="0"
            className="border-2 border-gray-500 rounded-md"
            title="CV PDF Preview"
          />
        ) : (
          <p className="text-center text-lg"> You can <a href="/CV.pdf" className="text-blue-500">download the CV</a> instead.</p>
        )}
      </div>

      <div className="mt-4 text-center">
        <a
          href="/CV.pdf"
          download
          className="px-6 py-3 bg-green-500 text-white rounded-full"
          aria-label="Download CV"
        >
          Download CV
        </a>
      </div>
      <div className="mt-5 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-green-800 hover:text-white transition duration-300">
            Back
          </button>
        </Link>
      </div>

    </section>
  );
};

 export default CV;