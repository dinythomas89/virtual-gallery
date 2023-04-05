import { Fragment } from "react";
import { GlobalStyle } from "./styles/global.styles";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageList from "./pages/ImageList";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
