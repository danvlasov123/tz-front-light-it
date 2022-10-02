import { Header } from "./header/header";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = (): JSX.Element => {
  return (
    <div className="min-h-screen h-full">
      <Routes>
        {routes.map(({ path, Component, name, header }) => {
          return (
            <Route
              path={path}
              key={name}
              element={
                <>
                  {header && <Header />}
                  <div className={header ? "pt-12" : ""}>
                    <Component />
                  </div>
                </>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default Layout;
