import React from 'react';

const Item = ({item}) => {
    const {id, images, title, brand, category, price} = item;
    console.log(images)
    return (
        <div>
            <div className='bg-gray-300 rounded-2xl my-6 shadow-[gray] shadow-lg'>
               <div className='p-3 '>
               <img className='h-[22rem] w-[20rem] rounded-md shadow-slate-900 shadow-sm' src={images[0]} alt="" />
                <div>
                    <h2 className='text-2xl font-sans font-bold my-3'>{title}</h2>
                    <p className='text-lg font-semibold'>Brand: {brand}</p>
                    <p className='text-lg font-semibold'>Category: {category}</p>
                    <h3 className='text-2xl font-sans font-bold my-3'>Price: ${price}</h3>
                </div>
                <div className='flex items-center justify-between'>
                

                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Buy now</button>

                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  Add to card
</button>


                </div>
               </div>

            </div>
        </div>
    );
}

export default Item;
