import React from 'react'

// css import
import './Movie-Data-styles/movie-data.css'

export default function MovieData({ data, opened, closeMovieData, category, setCategory }) {
  return (
    <div className={`Movie-data ${opened ? 'opened' : 'closed'} text-white w-full h-[710px]`}>
      <div style={{
        background: category === 'about' ? `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path}) no-repeat center center / cover` : '#111'
      }}
        className={`movie__backdrop_path w-full h-full relative`}>
        <div className='pt-[30px] flex justify-center gap-[20px]'>
          <p onClick={() => setCategory('about')} className={`${category === 'about' ? 'bg-gray-800' : ''} py-[10px] cursor-pointer px-[6px] rounded-lg w-[100px] flex justify-center`}>О фильме</p>
          <p onClick={() => setCategory('detalis')} className={`${category === 'detalis' ? 'bg-gray-800' : ''} py-[10px] cursor-pointer px-[6px] rounded-lg w-[100px] flex justify-center`}>Детали</p>
        </div>

        <div onClick={closeMovieData} className="close cursor-pointer absolute right-[30px] top-[30px] fill-white">
          <svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="styles_close-icon__tSnUF" data-tid="SliderDownClose"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.303 11.999 4.15 5.847 5.848 4.15 12 10.302 18.15 4.15l1.697 1.697L13.697 12l6.151 6.151-1.697 1.697L12 13.696l-6.152 6.151-1.697-1.697L10.303 12Z"></path></svg>
        </div>

        <div className='flex justify-between'>
          <div className="title">
            <h2 className='text-[42px] pt-[70px] font-[700]'>{data.title}</h2>

            <div className="spans flex gap-3">
              <p className='text-green-600'>{data.vote_average.toString().slice(0, 3)}</p>
              <p className='opacity-[.5]'>{data.release_date.toString().slice(0, 4)},</p>
              <p className='opacity-[.5]'>драма,</p>
              <p className='opacity-[.5]'>биография</p>
              <p className='opacity-[.5]'>Швеция</p>
              <p className='opacity-[.5]'>1ч</p>
              <p className='opacity-[.5]'>37мин</p>
              <p className='opacity-[.5]' >18+</p>
            </div>

            <div className='flex items-center'>
              <div className='w-[28px] h-[18px] text-[12px] font-[400] border-[1px] border-white flex items-center justify-center opacity-[.5]'>{data.vote_average.toString().slice(0, 3)}</div>

              <p className='flex items-center ml-3 text-[14px] opacity-[.5]'>
                <svg width="30px" height="30px" viewBox="0 0 25 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="styles_icon__s3kqT" aria-label="Аудиодорожки" data-tid="Audio"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 9.5a11 11 0 0 1-4.219 8.67l-1.583-1.81A8.605 8.605 0 0 0 21.6 9.5c0-2.8-1.335-5.287-3.402-6.861l1.583-1.81A11 11 0 0 1 24 9.5Zm-4.722 0a6.288 6.288 0 0 1-2.614 5.107l-1.592-1.819A3.893 3.893 0 0 0 16.878 9.5c0-1.383-.72-2.597-1.806-3.289l1.592-1.82A6.288 6.288 0 0 1 19.278 9.5ZM6 6l6.5-4.5v16L6 13H2.5V6H6Z" fill="#fff" fill-opacity=".6"></path></svg>
                <span className='ml-2'>Rus, Swe</span>
              </p>

              <p className='flex items-center ml-3 text-[14px] opacity-[.5]'>
                <svg width="30px" height="30px" viewBox="0 0 24 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="styles_icon__IhkNu" aria-label="Субтитры" data-tid="Subtitles"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.577H2v13.846h20V2.577ZM5.077 7.193h3.846V9.5H5.077V7.193Zm10 4.615h3.846v2.308h-3.846v-2.308Zm3.846-4.615h-7.692V9.5h7.692V7.193ZM5.077 11.808h7.692v2.308H5.077v-2.308Z" fill="#fff" fill-opacity=".6"></path></svg>
                <span className='ml-2'>Rus, Eng</span>
              </p>
            </div>

            <div className="lorem">
              <div className='text-[20px] m-0 w-[581px]'>
                <p>Тернистый путь к успеху суперзвезды футбола <br /> Златана Ибрагимовича. Байопик, снятый по мировому бестселлеру</p>
              </div>
            </div>

            <div className='absolute bottom-[15px]'>
              <p className='text-[#FF5500] z-10 text-[42px] font-[500] mb-[10px]'>от 299 ₽</p>
              <div className='z-[10] flex items-center gap-[9px]'>
                <button className='see-now-button relative w-[300px] h-[70px] text-white z-[11] flex items-center pr-[32px] pl-[28px] text-[1.5rem] rounded-[45px]'>
                  <svg className='pr-[6px]' width="2.1rem" height="2.1rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" data-tid="Play">
                    <path d="M6 3.375L21 12L6 20.625V3.375Z" fill="white"></path>
                  </svg>
                  <span>Купить и смотреть</span>
                </button>

                <button className='px-[32px] h-[70px] text-[1.5rem] rounded-[45px] bg-[#1F1F1FF2]'><span>О фильме</span></button>

                <button>
                  <svg className='fill-white bg-[#1F1F1FF2] px-[21px] h-[70px] w-[70px] rounded-full' width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-tid="Bookmark">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.05 13.5V9.3h4.575V5.7H28.05V1.125h-3.6V5.7h-4.2v3.6h4.2v4.2h3.6ZM11.475 5.625h4.275v3.6h-4.275v16.353l4.868-2.524 1.657-.86 1.657.86 4.868 2.524V18h3.6v13.5l-3.6-1.867L18 26.25l-6.525 3.383-3.6 1.867V5.625h3.6Z">
                    </path>
                  </svg>
                </button>

                <button>
                  <svg className='fill-white bg-[#1F1F1FF2] px-[21px] h-[70px] w-[70px] rounded-full' width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-tid="Forbidden"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6 12a7.6 7.6 0 1 1-15.2 0 7.6 7.6 0 0 1 15.2 0Zm2.4 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.5 13.8h9v-3.6h-9v3.6Z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          {
            category === 'detalis' &&
            <div className='detalis pt-[75px] grid grid-cols-2 absolute right-[10rem] gap-6'>
              <div className='text-[18px]'>
                <h2 className='text-[27px]'>В главных ролях</h2>
                <p>Марио Касас</p>
                <p>Ана Вахенер</p>
                <p>Хосе Коронадо</p>
                <p>Барбара Ленни</p>
                <p>Франсеск Орелья</p>
              </div>

              <div className='text-[18px]'>
                <h2 className='text-[27px]'>Аудиодорожки</h2>
                <p>Русский · Back Board Cinema</p>
                <p className='opacity-[.7]'>Стерео</p>
                <br />
                <p>Русский · Back Board Cinema</p>
                <p className='opacity-[.7]'>Объемный звук 5.1</p>
              </div>

              <div className='text-[18px]'>
                <h2 className='text-[27px]'>Режиссёры</h2>
                <p className='opacity-[.7]'>Ориол Паоло</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div >
  )
}
