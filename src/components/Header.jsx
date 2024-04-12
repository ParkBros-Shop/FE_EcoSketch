import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between  ">
        <div className="navbar h-20 px-5 bg-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>원두 종류</a></li>
        <li>
          <a>원두</a>
          <ul className="p-1">
            <li><a>200g</a></li>
            <li><a>500g</a></li>
            <li><a>1kg</a></li>
          </ul>
        </li>
        <li><a>공지사항</a></li>
      </ul>
    </div>
    <Link to="/"><img src="/src/assets/EcoSketch.png" className="w-32 ml-5"/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><a>원두 종류</a></li>
      <li>
        <details>
          <summary>원두</summary>
          <ul className="w-28 px-0 mt-0">
            <li><a>200g</a></li>
            <li><a>500g</a></li>
            <li><a>1kg</a></li>    
          </ul>
        </details>
      </li>
      <li><a>공지사항</a></li>
    </ul>
  </div>
  <div className="navbar-end text-xl">
          <Link to="/myPage" className="ml-3 bg-transparent border-none">마이페이지</Link>
          <Link to="/purchaseList" className="ml-3 bg-transparent border-none">장바구니</Link>
          <p className="ml-3 bg-transparent border-none">로그아웃</p>
  </div>
</div>
    </header>
  );
};

export default Header;
