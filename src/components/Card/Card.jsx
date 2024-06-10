import React from 'react';

// css import
import './Card-styles/card.css'

export default function Card({ data, isClicked, openFilmInfo }) {
  return (
    <div onClick={openFilmInfo} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})` }} className={`Card bg-cover flex-shrink-0 w-[calc(100vw/5-12px)] h-[196px] my-6 hover:scale-[1.1] hover:z-20 hover:w-[calc(100vw/5-10px)] duration-500 cursor-pointer relative ${isClicked ? 'selected' : ''}`}>
      <p className='text-[18px] text-white m-1 bg-gray-500 inline-block px-2 rounded'>{data.vote_average.toString().slice(0, 3)}</p>
      <p className='text-[18px] text-white m-1 bg-[#FF5500] inline-block px-2 rounded'>от 99 ₽</p>

      {isClicked && <div className='bx bxs-down-arrow absolute top-full left-1/2 translate-x-[-50%] text-white text-[1rem]'></div>}
    </div>
  );
}
