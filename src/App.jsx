import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./Pages/ListPage";
import CountryDetail from "./Pages/CountryDetail";
import Layout from "./Pages/Layout";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="detail" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
