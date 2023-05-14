import { Layout } from 'pages/layout/Layout';
import { Vacancy } from 'pages/vacancy/Vacancy';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Routers } from 'types/enums/router';

export const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to={Routers.VACANCY_PAGE} />} />
      <Route path={Routers.VACANCY_PAGE} element={<Vacancy />} />
    </Route>
  </Routes>
);
