import React from 'react';
import { images } from '../images';

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-3'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero exercitationem voluptatum commodi deserunt, cupiditate nam temporibus quasi, 
                rerum saepe pariatur expedita provident facere veritatis odio aperiam rem at reiciendis.
            </p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='row-span-2 object-cover w-full h-full' src={images.iceland_four} alt="#" />
            <img className='object-cover w-full h-full' src={images.iceland_four} alt="#" />
            <img className='object-cover w-full h-full' src={images.iceland_four} alt="#" />
        </div>
    </div>
  )
}

export default Rooms