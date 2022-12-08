import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyled from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyled />
        <App />
    </React.StrictMode>
);
