import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Button from './components/Button';
import Button, { Modal } from 'react-bootstrap'
import { useState, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { YMaps, Map } from '@pbe/react-yandex-maps';
import Navibar from './components/Navibar';
import Home from './pages/Home';
import About from './pages/About';
import MapPage from './pages/MapPage';
import Users from './pages/Users.tsx';
import ErrorPage from './pages/ErrorPage';
// import { Home, About, MapPage, Users } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Navibar></Navibar>
      <Routes>
      {/* <Route path="/" component={<Home></Home>}></Route> */}
      <Route index element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/map" element={<MapPage></MapPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
