import React from 'react';
import '../banner/Banner.css';

const Banner = () => {
    return (
        <div className='banner text-6xl font-mono font-extrabold text-center '>
            <h1 className='pt-10 my-auto py-auto'>Select Your New <br/> Perfect Style </h1>
            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-lg font-semibold">Shop Now</button>

        </div>
    );
}

export default Banner;
