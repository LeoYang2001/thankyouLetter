import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ name , resetName}) {
  const navlist = [
    {
      path: '/',
      tabName: 'Home',
      exact: true, // Add the 'exact' prop for the Home link
    },
    {
      path: '/contact',
      tabName: 'Contact',
    },
  ];

  return (
    <nav style={{
      width: '100%',
      background: 'linear-gradient(to right, #F4F0E4 30%, white 100%)',
    }}>
      <ul className='flex justify-end py-10 px-20 items-center'>
        <div className='mr-auto flex  flex-row items-center'>
          <div style={{
          width: 100,
          height: 100,
          backgroundImage: 'url("/wave.gif")',
          backgroundSize: '200%', // Adjust as needed
          backgroundPosition: 'center', // Adjust as needed
        }} className=' relative rounded-full'>
         
          </div>
          <span className='text-lg font-semibold ml-2'>Goodbye {name}</span>
          <span style={{cursor:'pointer'}} className='ml-6' onClick={resetName}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg></span>

        </div>
        {navlist?.map((navItem, index) => (
          <li key={index} className='mx-6'>
            <NavLink
              to={navItem.path}
              activeClassName='active'
              className='text-lg font-semibold'
              exact={navItem.exact}
            >
              {navItem.tabName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
