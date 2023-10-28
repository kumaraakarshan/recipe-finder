import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of Routes instead of Route

import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap your route definitions in a Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
