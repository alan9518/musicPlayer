import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "df8c2d40-898c-40b9-889d-efe467c16f38",

    authority:
      "https://login.microsoftonline.com/42c709b6-6772-48dd-bde9-c62288883620",
    redirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  // cache: {
  //   cacheLocation: "localStorage", // set your cache location to local storage
  // },
  // cache: {
  //   cacheLocation: BrowserCacheLocation.LocalStorage, // Ensure cache is shared between windows/tabs
  // },
});

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();

  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <App instace={msalInstance} />
      </MsalProvider>
    </React.StrictMode>
  );
});

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
