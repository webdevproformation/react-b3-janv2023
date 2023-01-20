import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './composant/front/Home';
import Contact from './composant/front/Contact';
import Login from './composant/front/Login';
import Dashboard from './composant/back/Dashboard';
import FormArticle from './composant/back/article/FormArticle';
import CycleVie from './composant/front/CycleVie';
import Single from './composant/front/Single';
import NotFound from './composant/front/NotFound';
import MentionLegale from './composant/front/MentionLegale';
import Template from './composant/back/Template';



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="cycle-vie" element={<CycleVie />} />
          <Route path="article/:id" element={<Single />} />
          <Route path="mention-legale" element={<MentionLegale />} />
          <Route path="admin" element={<Template />}> 
                      {/** template imbriqué */}
            <Route index element={<Dashboard />} />
            <Route path="article"> 
              <Route path="add" element={<FormArticle />} />
              <Route path="update/:id" element={<FormArticle />} />
            </Route>
          </Route>
          {/** route à mettre en dernière position => route 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
)
