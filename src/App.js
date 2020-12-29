/* ==========================================================================
** Music Player Main Component
** 29/12/2020
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Imports
// --------------------------------------
  import {Player, Song } from './components';
  import data from "./util";
  import "./styles/app.scss";
  // import './app.scss';

// --------------------------------------
// Create Component
// --------------------------------------
  function App() {
    return (
      <div className="App">
        <h1>Music Player </h1>
        <Song/>
        <Player/>
      </div>
    );
  }

// --------------------------------------
// Export Component
// --------------------------------------
  export default App;
