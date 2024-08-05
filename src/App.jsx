import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/Layout/index"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
