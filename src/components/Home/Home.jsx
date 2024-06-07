import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetch1 = await fetch('https://api.themoviedb.org/3/search/movie?api_key=877a0b91e805fb63c2bb7e48097344dc&query=batman&page=1');
      const data1 = await fetch1.json();

      const fetch2 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=');
      const data2 = await fetch2.json();

      setMovies([...data1.results, ...data2.results]);
    };

    fetchData();
  }, []);

  return (
    <div className='Home w-full absolute top-[95vh] overflow-x-hidden'>
      <div className="Home__content px-[70px] overflow-hidden">
        <h2 className='text-white text-[32px] font-[700]'>Популярные</h2>
        <div ref={sliderRef} className="category__container my-[1em] gap-[12px] flex overflow-x-auto">
          {movies.slice(0, 20).map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
