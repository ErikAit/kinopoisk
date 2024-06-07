import React from 'react';

export default function Card({ data }) {
  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})` }} className='Card bg-cover flex-shrink-0 w-[calc(100vw/5-12px)] h-[196px] relative'>
      <p className='text-[18px] text-white m-1 bg-gray-500 inline-block px-2 rounded'>{data.vote_average.toString().slice(0, 3)}</p>
      <p className='text-[18px] text-white m-1 bg-[#FF5500] inline-block px-2 rounded'>от 99 ₽</p>
    </div>
  );
}
