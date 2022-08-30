import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonDetails } from "pages/PokemonDetails";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/">
            <Route element={<Home />} path="/"></Route>
            <Route element={<Search />} path="/search/:id" />
            <Route element={<PokemonDetails />} path="/pokemon/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
