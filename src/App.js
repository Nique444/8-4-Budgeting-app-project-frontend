import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";

import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/transactions' element={<Index />}/>
            <Route path='/transactions/:index' element={<Show />}/>
            <Route path='/transactions/new' element={<New />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
