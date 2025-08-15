import React from 'react';
import Image from '../assets/image.png';


const Overlay = () => {
  return (
    <div className="h-[730px] w-10/11 md:w-1/2">
        <img src={Image} alt="overlay" className="w-full h-full object-cover" />
    </div>
  );
};

export default Overlay;
