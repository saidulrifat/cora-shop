import React from 'react';
import '../banner/Banner.css';

const Banner = () => {
    return (
        <div className='banner text-6xl font-mono font-extrabold text-center grid place-items-center '>
           <div className='max-w-lg'>
           <h1 className='pt-10 my-auto py-auto'>Select Your New Perfect Style </h1>
           <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600    rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-lg font-semibold ">Shop Now</button>
           </div>
           

        </div>
    );
}

export default Banner;
