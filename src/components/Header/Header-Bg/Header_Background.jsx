import React from 'react'

// css import
import '../Header-Styles/header.css'

export default function HeaderBackground() {
  return (
    <div class="header__background__container w-full h-[93vh] bg-[url(https://cdn.movieguide.org/wp-content/uploads/2023/10/Screen-Shot-2023-10-06-at-9.13.36-AM.jpeg)] bg-cover absolute top-0 text-white">
      <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

      <div className="title z-10 absolute right-[27%] top-[23%]">
        <div className='w-[663px] flex justify-center'>
          <h1 className='text-[3rem] p-0 m-0 absolute top-[40px]'>THE</h1>
        </div>
        <h1 className='text-[15rem] p-0 m-0 absolute'>BLIND</h1>
        <p className='absolute text-[28px] font-[500] opacity-[0.5s] mt-[40%] text-center'>Охотник пытается справиться с алкогольной зависимостью и спасти брак. Вдохновляющая история о пойске духовного пути</p>
      </div>

      <div className="content h-full flex flex-col justify-end absolute bottom-[4rem] left-[5rem]">
        <p className='text-[#FF5500] z-10 text-[42px] font-[700] mb-[10px]'>от 299 ₽</p>

        <div className='z-[10] flex items-center gap-[9px]'>
          <button className='see-now-button relative w-[300px] h-[70px] text-white z-[11] flex items-center pr-[32px] pl-[28px] text-[1.5rem] rounded-[45px]'>
            <svg className='pr-[6px]' width="2.1rem" height="2.1rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" data-tid="Play">
              <path d="M6 3.375L21 12L6 20.625V3.375Z" fill="white"></path>
            </svg>
            Купить и смотреть
          </button>

          <button className='px-[32px] h-[70px] text-[1.5rem] rounded-[45px] bg-[#1F1F1FF2]'>О фильме</button>

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
  )
}
