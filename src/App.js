import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Cart } from "./views";
import log from "./services/log";
import Auth from "./api/localStorage";
const Login = React.lazy(() => import("./views/Login/Login"));
const MainLayout = React.lazy(() => import("./Layouts/MainLayout/MainLayout"));
const ProductSingle = React.lazy(() =>
  import("./views/ProductSingle/ProductSingle")
);
const Profile = React.lazy(() => import("./views/Profile/Profile"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <MainLayout />
            </React.Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="products/:productId" element={<ProductSingle />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* <Route path="about" element={<div>About page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const PrivateRoute = ({ children }) => {
  if (Auth.checkLogin()) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace={true} />;
  }
};
