import React from 'react'

// css import
import './Header-Styles/header.css'

export default function Header() {
  return (
    <div className='header-container w-full'>
      <header className="header relative w-full">
        <div className="header__gradient w-full absolute h-[186px]"></div>

        <div className="header_content flex ms-0 me-0 h-[84px] items-center justify-between px-[70px]">
          <div className="header__logo z-10 flex items-center w-[21.2rem] h-[84px] grow">
            <button className="menu_icon">
              <svg width="28px" height="28px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="HeaderNavigationMenu_control-icon__4_ucN" data-tid="Burger">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.6H3V5.2h18v2.4Zm0 6H3v-2.4h18v2.4Zm0 6H3v-2.4h18v2.4Z" fill="#fff" fill-opacity=".6"></path>
              </svg>
            </button>

            <a href="" className="home_link ms-[2.4rem]">
              <svg width="191px" height="84px" viewBox="0 0 164 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="styles_logo__1R5HL" data-tid="LogoKP"><path fill-rule="evenodd" clip-rule="evenodd" d="M58.859 18c0-5.889 2.954-10.6 8.281-10.6 5.328 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.28 10.6-5.328 0-8.282-4.71-8.282-10.6Zm8.281 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.065 0-2.954 3.533-2.954 7.652-.007 4.118.882 7.652 2.954 7.652ZM3.843 7.7v5.596h.294L7.98 7.7h5.32l-7.098 6.474.294.293L19.51 7.693v4.711L7.973 16.523v.292l11.537-1.028v4.419L7.973 19.178v.293l11.537 4.118v4.712L6.496 21.526l-.294.293 7.098 6.474H7.98l-3.843-5.596h-.294v5.596H0V7.686h3.843V7.7Zm19.23 0H28.1l-.294 12.363h.294L34.015 7.7h4.438v20.608h-5.026l.294-12.364h-.294L27.51 28.309h-4.438V7.7Zm23.955 0h-5.026v20.608h5.026v-9.13h4.137v9.13h5.026V7.7h-5.026v7.952h-4.137V7.7Zm45.25 0h-14.19v20.608h5.027V11.233h4.137v17.075h5.026V7.7Zm2.66 10.3c0-5.889 2.954-10.6 8.282-10.6 5.32 0 8.281 4.711 8.281 10.6 0 5.89-2.954 10.6-8.281 10.6-5.32 0-8.282-4.71-8.282-10.6Zm8.282 7.66c2.072 0 2.954-3.534 2.954-7.652 0-4.12-.889-7.652-2.954-7.652-2.072 0-2.954 3.533-2.954 7.652 0 4.118.882 7.652 2.954 7.652ZM119.187 7.7h-5.026v20.608h4.438l5.916-12.364h.294l-.294 12.364h5.026V7.7h-4.438l-5.916 12.363h-.294l.294-12.363Zm23.669 13.541 4.732.585c-.889 4.12-2.954 6.774-7.364 6.774-5.32 0-8.016-4.71-8.016-10.6 0-5.889 2.689-10.6 8.016-10.6 4.317 0 6.475 2.649 7.364 6.475l-4.732 1.177c-.294-2.063-1.155-4.71-2.632-4.71-1.771 0-2.689 3.533-2.689 7.651 0 4.09.918 7.652 2.689 7.652 1.449.015 2.33-2.341 2.632-4.404Zm11.83-13.54h-4.732v20.607h4.732v-9.13h.294l3.549 9.13H164l-5.177-10.6L163.849 7.7h-5.026l-3.843 9.13h-.294V7.7Z" fill="#fff"></path></svg>
            </a>

            <div class="HeaderNavigationMenu_geotag__YltYR ml-[6px]" data-tid="Geotag">
              <div class="Geotag_iconContainer__3Hmum Hint_target__8giF6" data-tid="Hint">
                <svg className='w-[42px] h-[24px]' width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="Geotag_globeIcon__P8FdE" fill="none" data-tid="GlobeIcon"><circle cx="24" cy="24" r="23" stroke="#fff" stroke-width="3px"></circle></svg>
                <div class="Geotag_continentsContainer__cux05">
                  <div class="Geotag_continents__eQ0qc Geotag_continentsAnimation1__pXQP6"><svg width="80px" height="44px" viewBox="0 0 80 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="Geotag_continentsIcon__9ysEY" aria-hidden="true" fill="none" data-tid="ContinentsIcon"><path d="M22.026 37.678c-.244 2.958-.838 4.653.787 5.849.297.532.89 1.06.89-1.08 0-2.675 4.77-6.065 6.028-8.973 1.258-2.908-2.097-3.34-4.298-4.587-2.201-1.246-4.642.898-5.38-1.429-.739-2.326 1.38-4.42 4.49-6.181 3.109-1.762-.368-5.002 2.62-5.002 2.987 0 4.542-4.985 5.258-9.14.716-4.154-5.678-7.544-10.395-7.095C17.31.489 11.405 9.744 11.23 11.29c-.175 1.545-2.568 1.013-6.394 1.18-3.826.166-.35 6.364 2.393 4.885s4.647 1.08 5.067 4.77c.419 3.688 5.608 6.363 6.638 6.363 1.031 0 2.376 1.13 2.08 3.008-.298 1.878 1.257 3.224 1.012 6.182ZM40.614 17.479c0 2.234-2.75 1.63-2.68 5.035-2.321 3.876-1.107 6.294.858 6.896 1.965.603 3.036 1.277 4.197 5.94 1.16 4.663 4.34 1.4 5.376-1.029 1.036-2.428.982-9.697 4.215-7.747 3.232 1.95 7.126 1.028 9.823 1.028s5.911-5.815 6.161-7.092c.25-1.276 2.733-4.716 5.858-5.567 3.126-.85 2.322-2.553 0-3.811-2.322-1.26-9.465.602-10.68-2.802-1.214-3.404-4.947-2.11-7.572.62-2.626 2.731-4.876 3.086-10.056 2.182-5.179-.905-5.5 4.113-5.5 6.347Z" fill="#fff"></path></svg>
                  </div>
                  <div class="Geotag_continents__eQ0qc Geotag_continentsAnimation2__Yrtuz"><svg width="80px" height="44px" viewBox="0 0 80 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="Geotag_continentsIcon__9ysEY" aria-hidden="true" fill="none" data-tid="ContinentsIcon"><path d="M22.026 37.678c-.244 2.958-.838 4.653.787 5.849.297.532.89 1.06.89-1.08 0-2.675 4.77-6.065 6.028-8.973 1.258-2.908-2.097-3.34-4.298-4.587-2.201-1.246-4.642.898-5.38-1.429-.739-2.326 1.38-4.42 4.49-6.181 3.109-1.762-.368-5.002 2.62-5.002 2.987 0 4.542-4.985 5.258-9.14.716-4.154-5.678-7.544-10.395-7.095C17.31.489 11.405 9.744 11.23 11.29c-.175 1.545-2.568 1.013-6.394 1.18-3.826.166-.35 6.364 2.393 4.885s4.647 1.08 5.067 4.77c.419 3.688 5.608 6.363 6.638 6.363 1.031 0 2.376 1.13 2.08 3.008-.298 1.878 1.257 3.224 1.012 6.182ZM40.614 17.479c0 2.234-2.75 1.63-2.68 5.035-2.321 3.876-1.107 6.294.858 6.896 1.965.603 3.036 1.277 4.197 5.94 1.16 4.663 4.34 1.4 5.376-1.029 1.036-2.428.982-9.697 4.215-7.747 3.232 1.95 7.126 1.028 9.823 1.028s5.911-5.815 6.161-7.092c.25-1.276 2.733-4.716 5.858-5.567 3.126-.85 2.322-2.553 0-3.811-2.322-1.26-9.465.602-10.68-2.802-1.214-3.404-4.947-2.11-7.572.62-2.626 2.731-4.876 3.086-10.056 2.182-5.179-.905-5.5 4.113-5.5 6.347Z" fill="#fff">
                  </path>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header_center w-[1101px] relative flex justify-center h-[84px]">
            <div className="header_center_content flex items-center">
              <nav className="navbar">
                <ul className="ul flex p-0 font-[700]">
                  <li className='me-[3.2rem] text-[1.4rem] leading-[2.2rem]'><a href="" className='text-white opacity-[.6]'>Главное</a></li>
                  <li className='me-[3.2rem] text-[1.4rem] leading-[2.2rem]'><a href="" className='text-white border-b-[.3rem] border-b-[#f50] pb-[1.2rem]'>Магазин</a></li>
                  <li className='me-[3.2rem] text-[1.4rem] leading-[2.2rem]'><a href="" className='text-white opacity-[.6]'>Каналы</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="header_end z-10 w-[312px]">
            <div className="header_end_content flex items-center">
              <button className='style_button w-[228px] h-[37px] text-[15px] leading-[1.6rem] py-[9px] px-[18px] rounded-[5.2rem] flex items-center'>
                Смотреть кино бесплатно
              </button>

              <a className='text-[21px] text-[#FFFFFF99] py-[2.3px] pl-[2.3px] ml-[15px]' href="">Войти</a>
            </div>
          </div>
        </div>
      </header>

      <HeaderBackground />
    </div>
  )
}
