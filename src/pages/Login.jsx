import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-gray-900">로그인</h2>
            <p className="mt-2 text-sm text-gray-600">SNS 계정으로 간편하게 로그인하세요.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center">
              <button
                className="w-full flex items-center justify-between py-3 px-4 border border-transparent text-lg font-medium rounded-md text-black shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
                style={{ backgroundColor: '#FEE500', borderColor: '#FEE500' }}
              >
                <img
                  className="w-7 h-auto mr-3"
                  
                  src="/src/assets/kakaoLogo.svg"
                  alt="Naver"
                />
                <span className="flex-grow text-center" style={{ fontSize: '1.3vw' }}>카카오 로그인</span>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="w-full flex items-center justify-between py-1 px-2 border border-transparent text-lg font-medium rounded-md text-white shadow-md transform transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
                style={{ backgroundColor: '#03c75a', borderColor: '#03c75a' }}
              >
                <img
                  className="w-11 h-auto"
                  src="/src/assets/Naver_square.png"
                  alt="Naver"
                />
                <span className="flex-grow text-center" style={{ fontSize: '1.3vw' }}>네이버 로그인</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;