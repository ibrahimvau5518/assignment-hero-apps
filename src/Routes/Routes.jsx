import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import All from '../Components/All/All';
import AppDetails from '../Pages/AppDetails/AppDetails';
import ErrorApp from '../Components/ErrorApp/ErrorApp';
import InstalledApp from '../Pages/InstalledApp/InstalledApp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/appData.json'),
        path: '/',
        Component: Home,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: 'apps',
        loader: () => fetch('/allAppData.json'),
        Component: All,
        errorElement: <ErrorApp></ErrorApp>,
      },
      {
        path: 'appDetails/:id',
        loader: () => fetch('/allAppData.json'),
        Component: AppDetails,
        errorElement: <ErrorApp></ErrorApp>,
      },
      {
        path: '/installation',
        Component: InstalledApp,
        loader: () => fetch('/allAppData.json'),
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);
