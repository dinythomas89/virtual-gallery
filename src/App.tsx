import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global.styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageList from "./pages/ImageList";

const Favourites = lazy(() => import("./pages/Favourites"));

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default App;
