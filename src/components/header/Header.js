import React from 'react';
import '../header/Header.css';

const Header = () => {
    return (
        <nav className='bg-stone-900 text-white flex justify-between items-center p-8 '>
            <h1 className='text-4xl font-serif font-bold'>CORA  <span className='text-red-600 m-2'>SHOP</span></h1>
            <div className='text-xl font-mono font-semibold '>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a className='relative inline-flex items-center hover:bg-sky-300 rounded-full px-3 py-2 ' href=""><span>Feature </span> <span class="absolute inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-1 -right-3 ">HOT</span>
</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </nav>
    );
}

export default Header;
