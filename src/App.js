import "./styles.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import { Layout } from "./pages/Layout";
const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./components/Post/CreatePost"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ColorAi = lazy(() => import("./components/Color/ColorAi"));
const ColorPalette = lazy(() => import("./components/Color/ColorPalette"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            // path="home"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="home"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback={<>...</>}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback={<>...</>}>
                <SignUp />
              </Suspense>
            }
          />{" "}
          <Route
            path="colorAI"
            element={
              <Suspense fallback={<>...</>}>
                <ColorAi />
              </Suspense>
            }
          />
          <Route
            path="color"
            element={
              <Suspense fallback={<>...</>}>
                <ColorPalette />
              </Suspense>
            }
          />
          <Route
            path="createpost"
            element={
              <Suspense fallback={<>...</>}>
                <>
                  <CreatePost />
                  <List />
                </>
              </Suspense>
            }
          />
          <Route
            path="test"
            element={
              <Suspense fallback={<>...</>}>
                <>Test!</>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={<p> yikes - there's nothing at this url. try again ? </p>}
          />
        </Route>
      </Routes>
    </>
  );
}
