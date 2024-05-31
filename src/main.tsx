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
import QnA from './pages/QnA.jsx';
import Product from './pages/Product.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import PurchaseList from './pages/PurchaseList.jsx';
import Review from './pages/Review.jsx';
import Login from './pages/Login.jsx';
import ChangePwd from './pages/ChangePwd.jsx';
import SignUp from './pages/SignUp.jsx';
import NaverRedirectHandler from './pages/NaverRedirectHandler.jsx';
import Product200g from './pages/Product200g';
import Product500g from './pages/Product500g';
import Product1kg from './pages/Product1kg';
const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> }, // 상대 경로 사용
      { path: 'naverLogin', element: <NaverLogin /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'postList', element: <QnA /> },
      { path: 'payment', element: <Payment /> },
      { path: 'product', element: <Product /> },
      { path: 'product200g', element: <Product200g /> },
      { path: 'product500g', element: <Product500g /> },
      { path: 'product1kg', element: <Product1kg /> },
      { path: 'productDetail', element: <ProductDetail /> },
      { path: 'purchaseList', element: <PurchaseList /> },
      { path: 'review', element: <Review /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: 'member',
    
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'changePwd',
        element: <ChangePwd />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      // 카카오 로그인 리다이렉트 처리 경로
      {
        path: 'callback',
        element: <NaverRedirectHandler />,
      },
      {
        path: 'naverLogin',
        element: <NaverLogin />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);