import { Routes, Route } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { BestAlbumsPage } from './views/BestAlbumsPage';
import { Header } from './components/Header';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/best-albums" element={<BestAlbumsPage />} />
    </Routes>
  </>
);
