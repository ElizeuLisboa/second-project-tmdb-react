import React from 'react'

import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "./../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={< DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default Router;
