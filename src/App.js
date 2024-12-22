import React,{ useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NewsDetail from "./pages/NewsDetail";

function App() {
  useEffect(() => {
    // Prevent user from navigating back by swiping on mobile or clicking the back button
    const preventBack = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      return false;
    };

    // Listen for popstate and beforeunload events to prevent going back
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = preventBack;

    // Cleanup on component unmount
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
