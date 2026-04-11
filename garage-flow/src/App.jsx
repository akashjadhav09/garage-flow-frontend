import { Routes, Route } from "react-router-dom";

import Navbar from "./Sections/Navbar";
import Footer from "./Sections/Footer";

import SignInCard from './auth/signin/SignIn';
import SignUpCard from "./auth/signup/SignUp";
import HomePage from "./Pages/HomePage";

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignInCard />} />
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
