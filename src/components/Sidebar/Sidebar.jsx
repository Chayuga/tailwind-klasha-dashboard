import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../../contexts/ContextProvider';

import { links } from '../Sidebar/links';
import klashaFullLogo from '../../assets/logo/klasha__logo.svg';
import klashaKLogo from '../../assets/logo/klasha-k.svg';

import UserDropDown from '../Navbar/UserDropDown';
import Languge from '../Navbar/Languge';

const Sidebar = () => {
  const {
    fullMenu,
    setFullMenu,
    mobileMenu,
    onMobile,
    setMobileMenu,
    showMenu,
    setShowMenu,
  } = useStateContext();

  const activeLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-[#EF2C5A] text-md';

  const normalLink =
    'flex items-center  pl-4 pt-3 pb-2.5 text-md text-black hover:text-gray-500';

  return (
    <>
      {showMenu && (
        <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto bg-sidebar-bg'>
          <div>
            <div className='flex flex-col items-center mt-8'>
              {onMobile && (
                <button type='button' onClick={() => setMobileMenu(false)}>
                  <MdOutlineCancel />
                </button>
              )}
              <Link
                to='/'
                className='flex justify-center item-center gap-3 mt-4 '
              >
                {fullMenu ? (
                  <img src={klashaFullLogo} alt='klasha logo' />
                ) : (
                  <img src={klashaKLogo} alt='klasha logo' />
                )}
              </Link>
            </div>
            <div className='flex flex-col items-center '>
              <div className='mt-10 '>
                {links.map((item) => (
                  <div key={item.title}>
                    <p className='text-gray-400 my-3 mt-4 '>
                      {fullMenu ? `${item.title1}` : `${item.title2}`}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={link.path ? `/${link.path}` : '#'}
                        key={link.name}
                        className={({ isActive }) => [
                          isActive ? activeLink : normalLink,
                          !link.path && normalLink,
                        ]}
                      >
                        {fullMenu ? (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <p className='mr-2'>{link.iconActive}</p>
                            <p>{link.name}</p>
                          </div>
                        ) : (
                          <div
                            className={`flex items-center {({ isActive }) => [
                            isActive ? activeLink : normalLink,
                          ]}`}
                          >
                            <p className='mr-2'>{link.iconActive}</p>
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
              {/* lower hide button */}
              <button
                type='button'
                onClick={() => setFullMenu((prevActiveMenu) => !prevActiveMenu)}
                className='flex items-center justify-center outline rounded-md mx-5 p-3 hover:bg-light-gray mt-20'
              >
                {fullMenu ? (
                  <>
                    <AiOutlineLeft />
                    <span className='ml-2'>Hide panel</span>
                  </>
                ) : (
                  <>
                    <AiOutlineRight />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
