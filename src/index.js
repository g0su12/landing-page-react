import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignInPage from './pages/signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

