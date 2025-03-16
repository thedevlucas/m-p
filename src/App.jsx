import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductInfoPage from './pages/ProductInfoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductInfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;