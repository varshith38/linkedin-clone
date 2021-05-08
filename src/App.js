import React from 'react';
import './App.css';
import Feed from './Compnents/Feed';
import Header from './Compnents/Header';
import Sidebar from './Compnents/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
