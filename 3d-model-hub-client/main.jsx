import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthContext.jsx'
import { AppRoutes }s './routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Use the router from AppRoutes.jsx */}
      <RouterProvider router={AppRoutes} />
    </AuthProvider>
  </React.StrictMode>,
)