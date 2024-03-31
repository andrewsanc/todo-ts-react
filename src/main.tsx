import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import ThemeContextProvider from "./context/theme-context-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
