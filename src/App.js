import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Nav from './components/Navbar/Navbar';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route path='/profile/*' element={<ProfilePage state={props.state} dispatch={props.dispatch}/>}/>
          <Route path='/messages/*' element={<Messages state={props.state} dispatch={props.dispatch}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;