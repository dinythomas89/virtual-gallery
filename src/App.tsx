import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global.styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageList from "./pages/ImageList";
import { Container } from "./styles/app.styles";
import Loading from "./components/Loading";

const Favourites = lazy(() => import("./pages/Favourites"));

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ImageList />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
