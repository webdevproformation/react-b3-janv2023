import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter , Routes , Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<> bienvenu sur le site !! </>} />
          <Route path='contact' element={<>nous contacter</>} />
          <Route path="login" element={<> Page de connexion </>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
