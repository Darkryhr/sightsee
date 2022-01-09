import React from 'react';
import { format } from 'date-fns';

const Card = () => {
  const vacation = {
    destination: 'New Zealand',
    description:
      "New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers.",
    img: 'https://www.newzealand.com/assets/Tourism-NZ/Fiordland/img-1536137761-110-7749-p-7ECF7092-95BD-FE18-6D4107E2E42D067E-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg',
    price: 479.99,
    followers: 0,
    start_date: '2021-12-21',
    end_date: '2021-12-28',
  };
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden max-w-sm cursor-pointer'>
      <img className='w-full' src={vacation.img} alt={vacation.destination} />
      <div className='p-6'>
        <div className='flex items-center justify-between'>
          <h4 className='font-semibold text-lg leading-tight truncate mb-2'>
            {vacation.destination}
          </h4>
          <div className='text-gray-600 text-xs font-semibold tracking-wide pb-2 '>
            {format(new Date(vacation.start_date), 'MMM do, Y')}
          </div>
        </div>
        <div className='text-sm'>{vacation.description}</div>
        <div className='flex items-end justify-between pt-3'>
          <div className='mt-1 font-semibold text-gray-700'>
            ${vacation.price}
            <span className='text-gray-600 text-sm'></span>
          </div>
          <span className=' text-gray-600 text-sm'>
            {vacation.followers} followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
