import { Routes, Route } from 'react-router-dom';
import { HomePage } from './views/HomePage';

export const App = () => (
  <>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>
);
