import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import { Movies, MovieDetail } from '@/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: ':id',
        element: <MovieDetail />,
      },
    ],
  },
]);
