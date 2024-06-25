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
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const [category, setCategory] = useState('about');

  const sliderRefs = useRef([]);

  const fetchData = async () => {
    const fetch1 = await fetch('https://api.themoviedb.org/3/search/movie?api_key=877a0b91e805fb63c2bb7e48097344dc&query=batman&page=1');
    const data1 = await fetch1.json();

    const fetch2 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=');
    const data2 = await fetch2.json();

    setMovies([...data1.results, ...data2.results, ...data1.results]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  const openFilmInfo = (movie, index) => {
    setFilmData(true);
    setSelectedMovie(index);
    setSelectedMovieData(movie);
    setCategory('about');
  }

  const scrollLeft = (index) => {
    sliderRefs.current[index].scrollLeft -= 300;
  };

  const scrollRight = (index) => {
    sliderRefs.current[index].scrollLeft += 300;
  };

  return (
    <div className='Home w-full absolute top-[95vh] overflow-x-hidden'>
      <div className="Home__content px-[70px] relative overflow-hidden">
        <h2 className='text-white text-[32px] font-[700]'>Популярные</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-[1780px] top-[35%]">
            <i onClick={() => scrollLeft(0)} class='bx bx-chevron-left text-white text-[80px] z-10'></i>
            <i onClick={() => scrollRight(0)} class='bx bx-chevron-right text-white text-[80px] z-10'></i>
          </div>
          <div ref={(el) => sliderRefs.current[0] = el} className="category__container relative my-[1em] gap-[12px] flex overflow-x-auto">
            {movies.slice(20, 40).map((movie, index) => {
              return <div key={movie.id}>
                <Card
                  data={movie}
                  isClicked={selectedMovie === index + 20}
                  openFilmInfo={() => openFilmInfo(movie, index + 20)}
                />
              </div>
            })}
          </div>
        </div>
        {filmData && selectedMovie >= 20 && selectedMovie < 40 &&
          <MovieData
            opened={filmData}
            data={selectedMovieData}
            closeMovieData={() => {
              setFilmData(false);
              setSelectedMovie(null)
            }}
            category={category}
            setCategory={handleChangeCategory}
          />
        }

        <h2 className='text-white text-[32px] font-[700] mt-[5rem]'>Новинки</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-[1780px] top-[35%]">
            <i onClick={() => scrollLeft(1)} class='bx bx-chevron-left text-white text-[80px] z-10'></i>
            <i onClick={() => scrollRight(1)} class='bx bx-chevron-right text-white text-[80px] z-10'></i>
          </div>
          <div ref={(el) => sliderRefs.current[1] = el} className="category__container my-[1em] gap-[12px] flex overflow-x-auto">
            {movies.slice(10, 20).map((movie, index) => {
              return <div key={movie.id}>
                <Card
                  data={movie}
                  isClicked={selectedMovie === index + 10}
                  openFilmInfo={() => openFilmInfo(movie, index + 10)}
                />
              </div>
            })}
          </div>
        </div>
        {filmData && selectedMovie >= 10 && selectedMovie < 20 &&
          <MovieData
            opened={filmData}
            data={selectedMovieData}
            closeMovieData={() => {
              setFilmData(false);
              setSelectedMovie(null)
            }}
            category={category}
            setCategory={handleChangeCategory}
          />
        }

        <h2 className='text-white text-[32px] font-[700] mt-[5rem]'>Теперь в Магазине</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-[1780px] top-[35%]">
            <i onClick={() => scrollLeft(2)} class='bx bx-chevron-left text-white text-[80px] z-10'></i>
            <i onClick={() => scrollRight(2)} class='bx bx-chevron-right text-white text-[80px] z-10'></i>
          </div>
          <div ref={(el) => sliderRefs.current[2] = el} className="category__container my-[1em] gap-[12px] flex overflow-x-auto">
            {movies.slice(40, 60).map((movie, index) => {
              return <div key={movie.id}>
                <Card
                  data={movie}
                  isClicked={selectedMovie === index + 40}
                  openFilmInfo={() => openFilmInfo(movie, index + 40)}
                />
              </div>
            })}
          </div>
        </div>
        {filmData && selectedMovie >= 40 && selectedMovie < 60 &&
          <MovieData
            opened={filmData}
            data={selectedMovieData}
            closeMovieData={() => {
              setFilmData(false);
              setSelectedMovie(null)
            }}
            category={category}
            setCategory={handleChangeCategory}
          />
        }
      </div>
    </div>
  );
}
