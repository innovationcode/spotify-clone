import React, { useState, useEffect } from 'react';
import Login from './components/login/Login.js';
import { getTokenFromUrl } from './spotify/spotify.js';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
      const hash = getTokenFromUrl();
      //console.log("hash >>>>>>  ", hash)
      //hide hash--token from URL after accessing it
      const _token = hash.access_token;
      //console.log("token >>>>>>  ", _token)
      window.location.hash = "";

      if(_token) {
          setToken(_token)
      }


  }, []);
  
  return (
    <div className="App">
        {/* Home page with Spotify logo and login button */}
        {
           token ? ( <h1> ALready logged in ...</h1>) : ( <Login /> )
        }
        <Login />
    </div>
  );
}

export default App;
