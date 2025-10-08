import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import All from '../Components/All/All';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>fetch('appData.json'),
        path: '/',
        Component: Home,
      },
      {
        path: '/apps',
        loader: ()=>fetch('allAppData.json'),
        Component: All
      }
    ],
  },
]);
