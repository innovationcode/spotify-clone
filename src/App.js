import React, { useEffect } from 'react';
import Login from './components/login/Login.js';
import { getTokenFromUrl } from './spotify/spotify.js';
import './App.css';

function App() {

  useEffect(() => {
      const hash = getTokenFromUrl();
      console.log("hash >>>>>>  ", hash)
      //hide hash--token from URL after accessing it
      const token = hash.access_token;
      console.log("token >>>>>>  ", token)
      window.location.hash = "";


  }, []);
  
  return (
    <div className="App">
        {/* Home page with Spotify logo and login button */}
        <Login />
    </div>
  );
}

export default App;
