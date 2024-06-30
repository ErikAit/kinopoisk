import React, { useEffect, useRef, useState } from 'react';

// components import
import Card from '../Card/Card';

// css import
import './Home-styles/home.css'
import MovieData from '../Movie-Data/MovieData';
import Footer from '../Footer/Footer';

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

    setMovies([...data1.results, ...data2.results, ...data1.results,
    ...data1.results, ...data2.results
    ]);
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
          <div className="slider-controls absolute flex justify-between items-center w-full top-[35%]">
            <i onClick={() => scrollLeft(0)} class='bx bx-chevron-left text-white text-[80px] z-10 relative right-[70px] cursor-pointer'></i>
            <i onClick={() => scrollRight(0)} class='bx bx-chevron-right text-white text-[80px] z-10 relative left-[70px] cursor-pointer'></i>
          </div>
          <div ref={(el) => sliderRefs.current[0] = el} className="category__container relative gap-[12px] flex overflow-x-auto">
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

        <h2 className='text-white text-[32px] font-[700] mt-[1.7rem]'>Новинки</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-full top-[35%]">
            <i onClick={() => scrollLeft(1)} class='bx bx-chevron-left text-white text-[80px] z-10 relative right-[70px] cursor-pointer'></i>
            <i onClick={() => scrollRight(1)} class='bx bx-chevron-right text-white text-[80px] z-10 relative left-[70px] cursor-pointer'></i>
          </div>
          <div ref={(el) => sliderRefs.current[1] = el} className="category__container gap-[12px] flex overflow-x-auto">
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

        <h2 className='text-white text-[32px] font-[700] mt-[1.7rem]'>Теперь в Магазине</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-full top-[35%]">
            <i onClick={() => scrollLeft(2)} class='bx bx-chevron-left text-white text-[80px] z-10 relative right-[70px] cursor-pointer'></i>
            <i onClick={() => scrollRight(2)} class='bx bx-chevron-right text-white text-[80px] z-10 relative left-[70px] cursor-pointer'></i>
          </div>
          <div ref={(el) => sliderRefs.current[2] = el} className="category__container gap-[12px] flex overflow-x-auto">
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

        <h2 className='text-white text-[32px] font-[700] mt-[1.7rem]'>Жанры</h2>

        <div className='genres flex py-[18px] gap-[10px]'>
          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/1534341/2a000001843847ce092f99de54ec03f9908f/720x360)]'></div>

          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/223007/2a0000018438302568b271ccc82563762fda/720x360)]'></div>

          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/239697/2a00000184388fae65f740ea391765d55e4f/720x360)]'></div>

          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/239697/2a00000184383c5f598751adbfaf25daef1b/720x360)]'></div>

          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/1534341/2a000001843864cc7034123a70c2335705ec/720x360)]'></div>

          <div className='h-[288px] bg-[url(https://avatars.mds.yandex.net/get-ott/1534341/2a000001843892886831c9143cc8a793ff40/720x360)]'></div>
        </div>

        <h2 className='text-white text-[32px] font-[700] mt-[1.7rem]'>Триллеры</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-full top-[35%]">
            <i onClick={() => scrollLeft(4)} class='bx bx-chevron-left text-white text-[80px] z-10 relative right-[70px] cursor-pointer'></i>
            <i onClick={() => scrollRight(4)} class='bx bx-chevron-right text-white text-[80px] z-10 relative left-[70px] cursor-pointer'></i>
          </div>
          <div ref={(el) => sliderRefs.current[4] = el} className="category__container gap-[12px] flex overflow-x-auto">
            {movies.slice(80, 100).map((movie, index) => {
              return <div key={movie.id}>
                <Card
                  data={movie}
                  isClicked={selectedMovie === index + 80}
                  openFilmInfo={() => openFilmInfo(movie, index + 80)}
                />
              </div>
            })}
          </div>
        </div>

        {filmData && selectedMovie >= 80 && selectedMovie < 100 &&
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


        <h2 className='text-white text-[32px] font-[700] mt-[1.7rem]'>Драмы</h2>
        <div className='relative'>
          <div className="slider-controls absolute flex justify-between items-center w-full top-[35%]">
            <i onClick={() => scrollLeft(3)} class='bx bx-chevron-left text-white text-[80px] z-10 relative right-[70px] cursor-pointer'></i>
            <i onClick={() => scrollRight(3)} class='bx bx-chevron-right text-white text-[80px] z-10 relative left-[70px] cursor-pointer'></i>
          </div>
          <div ref={(el) => sliderRefs.current[3] = el} className="category__container gap-[12px] flex overflow-x-auto">
            {movies.slice(60, 80).map((movie, index) => {
              return <div key={movie.id}>
                <Card
                  data={movie}
                  isClicked={selectedMovie === index + 60}
                  openFilmInfo={() => openFilmInfo(movie, index + 60)}
                />
              </div>
            })}
          </div>
        </div>

        {filmData && selectedMovie >= 60 && selectedMovie < 80 &&
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

      <Footer />
    </div>
  );
}
