import React from 'react';
import './loader.css';

export default function Loader() {
  return (
    <div className='flex justify-center items-center gap-3 sm:gap-5'>
      <span className="loader"></span>
      <span className="hidden sm:block loader"></span>
      <span className="hidden md:block loader"></span>
      <span className="hidden lg:block loader"></span>
    </div>
  );
}