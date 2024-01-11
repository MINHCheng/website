import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Resume from "./components/Resume";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/project' Component={Project} />
          <Route exact path='/resume' Component={Resume} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
