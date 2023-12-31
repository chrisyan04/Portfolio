'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import itsme from '@/public/its-me.webp';
import resumeWebp from '@/public/RESUME.webp';
import './Hero.css';

export default function Hero() {
  const [resumeToggle, setResumeToggle] = useState(false);

  const handleResumeToggle = () => {
    setResumeToggle(!resumeToggle);
  };

  const onDownloadClick = () => {
    const pdfUrl = "/RESUME.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Chris_Yan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className='grid grid-cols-2 items-center h-screen mx-36'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-7xl'>Chris Yan</h1>
        </div>
        <div className='text-lg w-1/2 text-center p-2'>
          <p>Shaping machine learning software in an age of datafication and AI.</p>
        </div>
        <div className='my-4'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleResumeToggle}
          >
            Resume
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src={itsme}
          alt='Chris'
          width={500}
          height={500}
          className='rounded-full'
          style={{ height: '325px', width: 'auto' }}
        />
      </div>

      {/* Pop-up Modal */}
      {resumeToggle && (
        <div className='modal-container'>
          <div className='modal-background' onClick={handleResumeToggle}></div>
          <div className='modal-content'>
            <button className='close' onClick={handleResumeToggle}>
              &times;
            </button>
            <Image
              src={resumeWebp}
              alt='Resume'
              width={400}
              height={400}
              style={{ objectFit: 'contain' }}
            />
            <button className='text-center' onClick={onDownloadClick}>
                Download
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
