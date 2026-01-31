import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Footer } from "../util/Alias";
import ThemeProvider from "../ThemeContext/ThemeContext";

export default function Router() {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
