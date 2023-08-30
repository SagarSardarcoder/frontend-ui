import React from "react"
import Home from "../components/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-details" element={<Profile/>}/>
      </Routes>
    </>
  );
};

export default Routing;
