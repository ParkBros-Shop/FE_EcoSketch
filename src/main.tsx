import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import Product from './pages/Product.jsx';
import Notice from './pages/Notice.jsx';

const queryClient = new QueryClient();

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
      { path: 'product', element: <Product /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'purchaseList', element: <PurchaseList /> },
      { path: 'notice', element: <Notice /> },
      { path: 'review', element: <Review /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);