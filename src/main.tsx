import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import NotFound from '../src/pages/NotFound.jsx';
import NaverLogin from './pages/NaverLogin.jsx';
import Home from './pages/Home.jsx';
import MyPage from './pages/MyPage.jsx';
import Payment from './pages/Payment.jsx';
import KakaoLogin from './pages/KakaoLogin.jsx';
import QnA from './pages/QnA.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import PurchaseList from './pages/PurchaseList.jsx';
import Review from './pages/Review.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> }, // 상대 경로 사용
      { path: 'naverLogin', element: <NaverLogin /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'postList', element: <QnA /> },
      { path: 'payment', element: <Payment /> },
      { path: 'kakaoLogin', element: <KakaoLogin /> },
      { path: 'productDetail', element: <ProductDetail /> },
      { path: 'purchaseList', element: <PurchaseList /> },
      { path: 'review', element: <Review /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
