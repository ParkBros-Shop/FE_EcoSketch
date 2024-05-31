import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">회원가입</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4 relative">
              <label htmlFor="email" className="text-left block text-sm font-medium text-gray-700">
                이메일 주소
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="이메일 주소"
              />
              <button type="button" className="absolute top-0 right-0 mt-7 bg-transparent text-gray-500 py-1 px-4 rounded-md text-sm focus:outline-none">중복확인</button>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button type="button" className="bg-gray-500 text-white py-3 mb-5 px-36 rounded-full text-xs focus:outline-none transform transition duration-200 hover:scale-100 active:scale-95">이메일 인증 요청</button>
            </div>
            <div className="mb-4">
              <label htmlFor="auth-code" className="text-left block text-sm font-medium text-gray-700">
                인증코드
              </label>
              <input
                id="auth-code"
                name="auth-code"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="인증코드 (시간제한)"
              />
            </div>
            <div className="flex justify-center items-center space-x-2">
              <button type="button" className="bg-gray-500 text-white py-3 mb-1 px-36 rounded-full text-xs focus:outline-none transform transition duration-200 hover:scale-100 active:scale-95">이메일 인증완료</button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-left block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="비밀번호"
            />
            <p className="flex justify-start text-xs text-gray-500 mt-1">영문 대소문자, 숫자, 특수문자 포함 8자리 이상 입력해주세요!</p>
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="text-left block text-sm font-medium text-gray-700">
              비밀번호 확인
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="text-left block text-sm font-medium text-gray-700">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="이름"
            />
          </div>
          
          
          <div className="mb-4">
            <label htmlFor="phone" className="text-left block text-sm font-medium text-gray-700">
              전화번호
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="전화번호"
            />
          </div>
          
          
          <div className="flex justify-end">
            <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded-md text-lg transform transition duration-200 hover:scale-100 active:scale-95">가입하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;