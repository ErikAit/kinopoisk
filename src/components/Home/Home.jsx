import React, { useState } from 'react'
import Card from '../Card/Card';

// components import

export default function Home() {
  const [movies, setMovies] = useState([]);

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
    <div className='Home absolute top-[95vh]'>
      <div className="Home__content px-[70px]">
        <h2 className='text-white text-[32px] font-[700]'>Популярные</h2>
        <div className="category__container">
          <Card />
        </div>
      </div>
    </div>
  )
}
