/* ==========================================================================
 ** Music Player Main Component
 ** 29/12/2020
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import { InteractionType } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";

import { useEffect, useRef, useState } from "react";
import { Library, Nav, Player, Song } from "./components";
import "./styles/app.scss";
import data from "./util";

// import './app.scss';

// --------------------------------------
// Create Component
// --------------------------------------
function App() {
  // ?--------------------------------------
  // ? Add State
  // ?--------------------------------------

  // const isAuthenticated = useIsAuthenticated();
  // console.log("🚀 ~ file: App.js:29 ~ App ~ isAuthenticated:", isAuthenticated);

  const { login, result, error } = useMsalAuthentication(
    InteractionType.Redirect
  );
  const { inProgress, accounts } = useMsal();
  console.log("🚀 ~ file: App.js:38 ~ App ~ accounts:", accounts);

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  useEffect(() => {
    setSongs(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UnauthenticatedTemplate>
        Not signed in
        {inProgress && <span> loading </span>}
        {error && JSON.stringify(error)}
        {result && JSON.stringify(result)}
        <button onClick={() => login()}> retry login </button>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
          <Nav
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
          />
          <Song currentSong={currentSong} />
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
          />
          <Library
            library={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            activeSong={currentSong && currentSong.id}
            libraryStatus={libraryStatus}
          />
        </div>
      </AuthenticatedTemplate>
    </>
  );
}

// --------------------------------------
// Export Component
// --------------------------------------
export default App;
