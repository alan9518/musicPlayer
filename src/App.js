/* ==========================================================================
 ** Music Player Main Component
 ** 29/12/2020
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

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
  const { inProgress, accounts } = useMsal();
  console.log("🚀 ~ file: App.js:38 ~ App ~ accounts:", accounts);

  const isInTeams = checkInTeams();
  console.log("🚀 ~ file: App.js:60 ~ App ~ isInTeams:", isInTeams);

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(data[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    setSongs(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginInTeams = () => {
    microsoftTeams.initialize();
    microsoftTeams.authentication.getAuthToken({
      successCallback: (result) => {
        console.log("result", result);
        setToken(result);
      },
      failureCallback: (reason) => {
        console.log("reason", reason);
      },
    });
  };

  return (
    <>
      <UnauthenticatedTemplate>
        Not signed in
        {inProgress && <span> loading </span>}
        <h5>is in Teams {isInTeams.toString()}</h5>
        <button onClick={loginInTeams}> retry login </button>
      </UnauthenticatedTemplate>

      {token && <code> {token} </code>}

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
