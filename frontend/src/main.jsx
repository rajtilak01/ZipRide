import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/UserContext.jsx";
import { CaptainDataContext } from "./context/CapatainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
    <CaptainDataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CaptainDataContext>
    </UserContext>
  </StrictMode>
);
