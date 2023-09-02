import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Notes from './pages/Notes';

function App() {
  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;