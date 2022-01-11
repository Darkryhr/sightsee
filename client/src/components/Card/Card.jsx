import React from 'react';
import { format } from 'date-fns';

const Card = ({ vacation }) => {
  return (
    <div className='bg-white shadow-lg hover:shadow-2xl transition-all hover:scale-105 rounded-lg max-w-xs overflow-hidden mx-2 border-gray-200 border'>
      <div className=''>
        <img
          className='object-cover h-60 w-80'
          src={vacation.img}
          alt={vacation.destination}
        />
      </div>
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h4 className='font-semibold text-lg leading-tight truncate mb-2 capitalize'>
            {vacation.destination}
          </h4>
          <div className='text-gray-600 text-xs font-semibold tracking-wide pb-2 '>
            {format(new Date(vacation.startDate), 'MMM do, Y')}
          </div>
        </div>
        <div className='text-sm overflow-hidden h-20'>
          {vacation.description}
        </div>
        <div className='flex items-center justify-between pt-3'>
          <div className='mt-1 font-semibold text-gray-700'>
            ${vacation.price}
            <span className='text-gray-600 text-sm'></span>
          </div>
          <span className=' text-gray-600 text-sm'>follow</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
