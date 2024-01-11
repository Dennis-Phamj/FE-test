import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PageDataProvider } from "./context/pageData";

const container = document.getElementById("application-root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <PageDataProvider>
      <App />
    </PageDataProvider>
  </React.StrictMode>
);
