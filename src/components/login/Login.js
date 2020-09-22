import React from 'react'
import { accessUrl } from "./../../spotify/spotify.js";

import './Login.css';

function Login() {
    return (
        <div className = 'login'>
            {/* Spotify Logo */}
            {/* Login with Spotify button */}
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logo"
            />
            <a href = {accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
