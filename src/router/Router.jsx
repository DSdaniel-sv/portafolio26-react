import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar } from "../util/Alias";
import ThemeProvider from "../ThemeContext/ThemeContext";

export default function Router() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
