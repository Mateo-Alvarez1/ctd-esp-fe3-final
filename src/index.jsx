import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Contact, Detail, Favs, Home } from './Routes'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dentists/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favs/>}  />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
