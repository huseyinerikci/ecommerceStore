import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/SingleProduct";

import Login from "./components/login/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
