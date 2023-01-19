import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './composant/front/Home';
import Contact from './composant/front/Contact';
import Login from './composant/front/Login';
import Dashboard from './composant/back/Dashboard';
import FormArticle from './composant/back/article/FormArticle';
import CycleVie from './composant/front/CycleVie';



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="cycle-vie" element={<CycleVie />} />
          <Route path="admin">
            <Route index element={<Dashboard />} />
            <Route path="article"> 
              <Route path="add" element={<FormArticle />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
 
)
