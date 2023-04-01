import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Favourites from "./gallery/Favourites";
import Footer from "./gallery/Footer";
import Header from "./gallery/Header";
import ImageList from "./gallery/ImageList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
