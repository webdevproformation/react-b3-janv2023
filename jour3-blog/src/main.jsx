import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './composant/front/Home';
import Contact from './composant/front/Contact';
import Login from './composant/front/Login';
import Dashboard from './composant/back/Dashboard';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="admin/" >
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
