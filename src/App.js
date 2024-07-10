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
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
// import { Home, About, MapPage, Users } from './pages';

function App() {

  return (<>
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
  </>
  );
}
//   const [identifier,setContent] = useState('1')



//   function handleClick(text){
//     console.log(text)
//     setContent(text)
//   }
//   return (
//     <div className="App"> 
//     <Header>   </Header>
//     <YMaps>
//     <div>
//       My awesome application with maps!
//       <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
//     </div>
//   </YMaps>
//     {/* <Button isActive={identifier===1} onClick={()=>handleClick(1)}>It should print 1</Button>
//     <Button isActive={identifier===2} onClick={()=>handleClick(2)}>It should print 2</Button> */}
//     <p>{identifier}</p>
//     </div>
//   );
// }
// const App = () => (
//   <YMaps>
//     <div>
//       My awesome application with maps!
//       <Map defaultState={{ center: [55.75, 37.57], zoom: 7 }} />
//     </div>
//   </YMaps>
// );

export default App;
