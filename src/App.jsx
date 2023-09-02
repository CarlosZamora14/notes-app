import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Data
import dummyNotes from './dummy_notes';

// Pages
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes} />} />
          <Route path='/create-note' element={<CreateNote setNotes={setNotes} />} />
          <Route path='/edit-note/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;