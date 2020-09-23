import React, { useState, useEffect } from 'react';
import Login from './components/login/Login.js';
import { getTokenFromUrl } from './spotify/spotify.js';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player.js';

import './App.css';

const spotify = new SpotifyWebApi();

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
          setToken(_token);
          spotify.setAccessToken(_token);

          spotify.getMe().then(user => {
            console.log("🧑‍ : ",user);
          })
      }


  }, []);
  
  return (
    <div className="App">
        {/* Home page with Spotify logo and login button */}
        {
           token ? <Player /> : <Login /> 
        }
    </div>
  );
}

export default App;
