import React from 'react';
import Login from './components/login/Login.js';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_Client_ID)
  return (
    <div className="App">
        {/* Home page with Spotify logo and login button */}
        <Login />
    </div>
  );
}

export default App;
