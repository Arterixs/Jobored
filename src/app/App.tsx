import { Route, Routes } from 'react-router-dom';
import { Layout } from '../pages/layout/Layout';

export const App = () => (
  <Routes>
    <Route path='/' element={<Layout />} />
  </Routes>
);
