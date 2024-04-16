import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-10 w-full bottom-0 mt-10 ">
      <div className="flex flex-col text-left pl-20 text-sm">
        <p className="py-5">에코스케치</p>
        <ul className="flex">
          <li className="mr-1">상호명 :</li>
          <li className="mr-2.5">에코스케치</li>
          <li className="mr-2.5">|</li>
          <li className="mr-2.5">사업자등록번호 : 897-29-01364</li>
          <li className="mr-2.5">|</li>
          <li className="mr-2.5">통신판매업 신고 : 제2023-경기김포-3650 [링크]</li>
          <li className="mr-2.5">|</li>
          <li className="mr-2.5">대표자 : 김옥화</li>
        </ul>
        <ul className="flex">
          <li className="mr-2.5">주소 : 경기 김포시 양촌읍 황금산단로 57 지케이디프라자 1층</li>
          <li className="mr-2.5">|</li>
          <li className="mr-2.5">이메일 : kow0308@naver.com</li>
          <li className="mr-2.5">|</li>
          <li className="mr-2.5">고객센터 : 031-982-7793</li>
        </ul>

        <ul className="flex items-center align-middle">
          <li className="mr-2.5 items-center align-middle">ⓒ Copyright 2024.All Right Reserved. Hosting by 박준서/박민서</li>
        </ul>

        <ul className="flex mt-6">
          <li className="mr-2.5 items-center align-middle">Copyright ⓒ 2024 박준서/박민서 All rights reserved.</li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;