// App.js
import React from 'react';
import { useAddress } from '@thirdweb-dev/react';
import GeneralLayout from './Components/GeneralLayout';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import DashBoardLayout from './pages/DashBoardLayout';
import Errorpage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import VideosPage from './pages/VideosPage';
import MusicPage from './pages/MusicPage';
import PicturesPage from './pages/PicturesPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';

const App = () => {
  const address = useAddress();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<GeneralLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<RequireAuth address={address} />}>
          <Route path='dashboard' element={<DashBoardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='video' element={<VideosPage />} />
            <Route path='music' element={<MusicPage />} />
            <Route path='picture' element={<PicturesPage />} />
          </Route>
        </Route>
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<Errorpage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
