import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';

// Data
import dummyNotes from '../dummy_notes';

// Components
import NoteItem from '../components/NoteItem';

function Notes() {
  return (
    <section>
      <header className='notes__header'>
        <h2>My notes</h2>
        <button className='btn'><CiSearch /></button>
      </header>
      <div className='notes__container'>
        {
          dummyNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link className='btn add__btn'><BsPlusLg /></Link>
    </section>
  );
}

export default Notes;