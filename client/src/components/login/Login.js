/* ==========================================================================
** Login Page Component
** 31/01/2021
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Imports
// --------------------------------------
    import React from 'react'; 
    import * as SpotifyFunctions from '../spotify/SpotifyFunctions.js'

// --------------------------------------
// Create Component
// --------------------------------------
const Login = ({loginAction}) => {

    const redirect_url =  SpotifyFunctions.redirectUrlToSpotifyForLogin();
    console.log("🚀 ~ file: Login.js ~ line 22 ~ Login ~ redirect_url", redirect_url);
    return (
        <div className="login-container">
            <div className="text-container">
                <h2> Welcome to the Waves Player </h2>
                <p> This player connects to the Spotify API to show your playlists and their songs </p>

                <button className="login-button" onClick = {() => window.location = redirect_url }>
                    Login With Spotify
                </button>

                <span className="disclainer">Due to the Spotify Web Api restrictions, this app only has access to the songs preview</span>

            </div>
        </div>)
}


export default Login;