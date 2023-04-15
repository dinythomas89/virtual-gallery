import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global.styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageList from "./pages/ImageList";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const Favourites = lazy(() => import("./pages/Favourites"));

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Suspense fallback={<Loading />}>
          <Route path="/favourites" element={<Favourites />} />
        </Suspense>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
