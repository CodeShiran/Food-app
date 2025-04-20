import React from 'react'
import {data} from '../data/data'

const Food = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/*filter row*/}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/*filter type*/}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>All</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>Burger</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>Pizza</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>Salads</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>Chicken</button>
                </div>
            </div>

            {/*filter price*/}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>$</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>$5</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>$55</button>
                    <button className='border-orange-600 text-orange hover: bg-orange-600 hover:text-white m-1'>$555</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food