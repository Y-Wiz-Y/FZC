import './scss/styles/main.scss';
import NavBar from './components/navBar';
import Header from './components/header';
import InfoBlock from './components/infoBlock';
import SearchBlock from './components/searchBlock';
import Footer from './components/footer';
import ProductBlock from './components/productBlock/productBlock';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductBuy from './pages/ProductBuy';
import ErrorPage from './pages/ErrorPage';
import HeaderLayout from './layout/headerLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HeaderLayout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:productId" element={<ProductBuy />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
