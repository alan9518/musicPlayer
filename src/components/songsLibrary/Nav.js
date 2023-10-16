/* ==========================================================================
 ** Navigation component to Toggle Songs
 ** 11/01/2021
 ** Alan Medina Silva
 ** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
import { useMsal } from "@azure/msal-react";
import { faArrowCircleRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// --------------------------------------
// Create Component
// --------------------------------------
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const { instance } = useMsal();
  return (
    <nav>
      <h1> React Hooks Music Player </h1>

      <div style={{ marginLeft: "auto" }}>
        <button
          onClick={() => {
            setLibraryStatus(!libraryStatus);
          }}
        >
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>

        <button
          onClick={() => {
            instance.logoutRedirect();
          }}
        >
          Log Out
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
