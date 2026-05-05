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
import Dashboard from './Components/Dashboard.jsx';
import { SessionProvider } from './Components/Context/SessionStorage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </StrictMode>,
);
