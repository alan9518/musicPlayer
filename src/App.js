/* ==========================================================================
 ** Music Player Main Component
 ** 29/12/2020
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
// import { useMsal } from "@azure/msal-react";

// import * as microsoftTeams from "@microsoft/teams-js";
import * as microsoftTeams from "@microsoft/teams-js";

import { useEffect, useRef, useState } from "react";
import { Library, Nav, Player, Song } from "./components";
import "./styles/app.scss";
import data from "./util";

// import './app.scss';

const checkInTeams = () => {
  // eslint-disable-next-line dot-notation
  const microsoftTeamsLib = microsoftTeams || window["microsoftTeams"];

  if (!microsoftTeamsLib) {
    return false; // the Microsoft Teams library is for some reason not loaded
  }

  if (
    (window.parent === window.self && window.nativeInterface) ||
    window.name === "embedded-page-container" ||
    window.name === "extension-tab-frame"
  ) {
    return true;
  }
  return false;
};

// --------------------------------------
// Create Component
// --------------------------------------
function App() {
  // ?--------------------------------------
  // ? Add State
  // ?--------------------------------------

  // const isAuthenticated = useIsAuthenticated();
  // console.log("🚀 ~ file: App.js:29 ~ App ~ isAuthenticated:", isAuthenticated);

  // const { login, result, error } = useMsalAuthentication(
  //   InteractionType.Redirect
  // );
  // const { inProgress, accounts } = useMsal();

  const isInTeams = checkInTeams();

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    isInTeams && microsoftTeams.initialize();
    setSongs(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInTeams]);

  const loginInTeams = () => {
    try {
      // Initialize the Microsoft Teams SDK
      microsoftTeams.initialize();

      // Get the user context from Teams and set it in the state
      microsoftTeams.getContext((context, error) => {
        if (error) setToken(JSON.stringify(error));
        else setToken(JSON.stringify(context, null, 2));
      });
    } catch (error) {
      setToken("error");
    }
  };

  return (
    <>
      <h5>is in Teams {isInTeams.toString()}</h5>
      <button onClick={loginInTeams}> Get User context </button>

      {token !== "" && (
        <div className="codeblock">
          <code> {token} </code>
        </div>
      )}

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
    </>
  );
}

// --------------------------------------
// Export Component
// --------------------------------------
export default App;
