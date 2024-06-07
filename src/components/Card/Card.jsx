import React from 'react';

export default function Card({ data }) {
  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})` }} className='Card bg-cover flex-shrink-0 w-[calc(100vw/5-12px)] h-[196px]'>
    </div>
  );
}
