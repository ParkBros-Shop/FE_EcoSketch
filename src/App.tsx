import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import './index.css';


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
