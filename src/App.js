import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter basename="/website">
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/project' Component={Project} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
