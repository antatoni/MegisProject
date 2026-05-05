import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './index.css';
import App from './App.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import { SessionProvider } from './Components/Context/SessionStorage.jsx';
import Posts from './Components/Posts.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  {
    path: '/posts',
    element: (
      <ProtectedRoute>
        <Posts />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </StrictMode>,
);
