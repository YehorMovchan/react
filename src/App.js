import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Navbar';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <ProfilePage />
    </div>
  );
}

export default App;