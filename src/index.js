import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SinglePage from './pages/singlePage/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/> } />
        <Route path='/user/:id' element={<SinglePage/>}/>

        <Route path='*' element={ <h1>Bunday sahifa yo'q</h1> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

