/* ==========================================================================
** Music Player Main Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import { useState, useEffect, } from 'react';
import { SpotifyContainer, Login } from './components';
import * as SpotifyFunctions from './components/spotify/SpotifyFunctions.js'
import "./styles/app.scss";




// --------------------------------------
// Create Component
// --------------------------------------
const App = () => {


  // ?--------------------------------------
  // ? Add State
  // ?--------------------------------------
  const [loggedInSpotify, setLoggedInSpotify] = useState(false);
  const [token, setToken] = useState('');
  const [updateToken, setUpdateToken] = useState(false)

  // ?--------------------------------------
  // ? Get Spotify Token
  // ?--------------------------------------
  useEffect(() => {
    const accessToken = SpotifyFunctions.checkUrlForSpotifyAccessToken();
    if (accessToken) {
      setLoggedInSpotify(true);
      setToken(accessToken)
    }
  })


  // ?--------------------------------------
  // ? If the Spotify Token expire, get a new one
  // ?--------------------------------------
  useEffect(() => {
    if (!updateToken)
      return;

    if(loggedInSpotify) {
      alert('Your Session has expired, you will be redirected to the login page')
      redirectToHomePage();
    }
    


  }, [updateToken]);


  const redirectToHomePage = () => {
    const homeUrl = window.location.origin;
    window.location.href = homeUrl
}



  // ?--------------------------------------
  // ? Render Component
  // ?--------------------------------------
  return (
    <div className="App">
      {!token ? <Login /> : <SpotifyContainer token={token} updateToken = {setUpdateToken}/>}
    </div>
  );
}

// --------------------------------------
// Export Component
// --------------------------------------
export default App;
