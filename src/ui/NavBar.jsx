import Logo from './Logo';

import { NavLink } from 'react-router-dom';

import { useState } from 'react';

const NAVLINK_STYLE =
  'max-sm:hidden py-2.5 hover:bg-stone-300 hover:py-2.5 md:text-base lg:text-lg px-2 inline-block transition-all duration-300 ease-in-out  font-medium';

function NavBar() {
  // Disble the background content once redux is installed
  // in Global state.
  const [mobileMenu, setMobileMenu] = useState(null);
  const [darkMode, setDarkMode] = useState(null);

  function handleMobileMenuToggle() {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  }

  function removeMobileMenu() {
    setMobileMenu(false);
    console.log(mobileMenu);
  }

  return (
    <div className={'sticky top-0 z-50 backdrop-blur-lg'}>
      <div
        className={
          'z-2 mb-2 flex w-full items-center shadow-lg backdrop-blur-lg'
        }
      >
        {<Logo />}

        <div>
          {/* Mobile icons nav bar */}
          <ul className={'flex w-full items-center font-medium sm:hidden'}>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                className={
                  'block px-2 py-3 transition-all duration-300 ease-in-out hover:cursor-pointer hover:py-3'
                }
              >
                <span>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <g>
                      <circle cx="4" cy="4" r="4" fill="#282323" />
                      <circle cx="24" cy="24" r="4" fill="#282323" />
                      <circle cx="14" cy="24" r="4" fill="#282323" />
                      <circle cx="4" cy="24" r="4" fill="#282323" />
                      <circle cx="24" cy="14" r="4" fill="#282323" />
                      <circle cx="14" cy="14" r="4" fill="#282323" />
                      <circle cx="4" cy="14" r="4" fill="#282323" />
                      <circle cx="24" cy="4" r="4" fill="#282323" />
                      <circle cx="14" cy="4" r="4" fill="#282323" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_2">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </li>
            {/*  */}
            <li>
              <NavLink
                to="login"
                className={
                  'block px-2 py-3 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-stone-300 hover:py-[0.82rem]'
                }
              >
                {' '}
                <svg width="35" height="24" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </li>
          </ul>
          {/*  */}

          {/* Mobile Menu */}
          {
            <div
              className={`absolute -left-full top-0 z-10 min-h-[100vh] w-full ${mobileMenu === false ? 'animate-exit-menu' : mobileMenu === true ? 'animate-mobile-menu' : ''} bg-stone-100 transition-all duration-1000 ease-in-out md:w-2/3`}
            >
              <div className="mb-1 flex border-b-2 py-2 shadow-md">
                <Logo />
                <button
                  className={
                    'px-4 py-2 text-2xl font-semibold text-red-500 hover:cursor-pointer hover:text-[1.8rem]'
                  }
                  onClick={removeMobileMenu}
                >
                  X
                </button>
              </div>
              <ul className={''}>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    to="home"
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="cryptocurrencies"
                  >
                    Cryptocurrencies
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="stocks"
                  >
                    Stocks
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
              </ul>
              {/*  */}
              <div
                className={'mt-1 flex items-center justify-center gap-3 px-4'}
              >
                <select className={'px-2 py-2 hover:cursor-pointer'}>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>

                {/*  */}

                <div
                  className={`relative flex w-[120px] rounded-full border-2 transition-colors duration-500 ease-in-out hover:cursor-pointer hover:bg-stone-300`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <div className="flex">
                    <span className="my-2 ml-3 px-2 py-2">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>

                    {/*  */}

                    <span className="my-2 mr-3 px-2 py-2">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  {/*  */}

                  <div
                    className={`${darkMode ? 'animate-dark-mode' : 'animate-light-mode'} absolute left-0 top-1/2 mx-2 h-[3rem] w-[3rem] -translate-y-1/2 rounded-full px-2 py-2`}
                  ></div>
                </div>
              </div>
            </div>
          }

          {/* DESKTOP display */}

          <ul className={'flex w-full items-center'}>
            <li>
              <NavLink
                to="Home"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? `active ${NAVLINK_STYLE} bg-stone-300`
                      : `${NAVLINK_STYLE}`,
                    isTransitioning ? 'transitioning' : '',
                  ].join(' ')
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cryptocurrencies"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? `active ${NAVLINK_STYLE} bg-stone-300`
                      : `${NAVLINK_STYLE}`,
                    isTransitioning ? 'transitioning' : '',
                  ].join(' ')
                }
              >
                Cryptocurrencies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="stocks"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? `active ${NAVLINK_STYLE} bg-stone-300`
                      : `${NAVLINK_STYLE}`,
                    isTransitioning ? 'transitioning' : '',
                  ].join(' ')
                }
              >
                Stocks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? `active ${NAVLINK_STYLE} bg-stone-300`
                      : `${NAVLINK_STYLE}`,
                    isTransitioning ? 'transitioning' : '',
                  ].join(' ')
                }
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to="login" className={NAVLINK_STYLE}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
