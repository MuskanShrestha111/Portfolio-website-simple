
'use client';
import React, { useEffect, useState } from 'react';



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
        {isClient && (
          <iframe
            src="/CV.pdf"
            width="100%"
            height="800px"
            frameBorder="0"
            className="border-2 border-gray-500 rounded-md"
            title="CV PDF Preview"
          >
          
            <a href="/CV.pdf" className="text-blue-500">
              Download the CV
            </a>.
          </iframe>
        )}
      </div>

      <div className="mt-4">
        <a
          href="/CV.pdf"
          download
          className="px-6 py-3 bg-green-500 text-white rounded-full"
        >
          Download CV
        </a>
      </div>
      

   
     
    </section>
  );
};

export default CV;


