import React, { useEffect, useRef, useState } from 'react';

// components import
import Card from '../Card/Card';

// css import
import './Home-styles/home.css'
import MovieData from '../Movie-Data/MovieData';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filmData, setFilmData] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
          {movies.slice(20, 40).map((movie, index) => {
            return <div key={movie.id} onClick={() => {
              setFilmData(!filmData)
              setSelectedMovie(index);
            }}>
              <Card data={movie} isClicked={selectedMovie === index} />
              {
                filmData && <MovieData data={movie} />
              }
            </div>
          })}
        </div>

        <h2 className='text-white text-[32px] font-[700] mt -[5rem]'>Новинки</h2>

        <div ref={sliderRef} className="category__container my-[1em] gap-[12px] flex overflow-x-auto">
          {movies.slice(10, 20).map((movie) => {
            return <div key={movie.id}>
              <Card data={movie} />
            </div>
          })}
        </div>

        <h2 className='text-white text-[32px] font-[700] mt-[5rem]'>Теперь в Магазине</h2>

        <div ref={sliderRef} className="category__container my-[1em] gap-[12px] flex overflow-x-auto">
          {movies.slice(15, 35).map((movie) => {
            return <div key={movie.id}>
              <Card data={movie} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
