import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

// Components
import NoteItem from '../components/NoteItem';

function Notes({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  function handleSearch() {
    setFilteredNotes(notes.filter(note => {
      return note.title.toLowerCase().match(searchKeyword.toLowerCase());
    }));
  }

  useEffect(handleSearch, [searchKeyword]);

  return (
    <section>
      <header className='notes__header'>
        {
          !showSearch ?
            <h2>My notes</h2> :
            <input
              type='text'
              autoFocus
              placeholder='Keyword'
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
            ></input>
        }
        <button className='btn' onClick={() => {
          setShowSearch(prevState => {
            if (prevState) setSearchKeyword('');
            return !prevState;
          });
        }}>
          {showSearch
            ? <MdClose />
            : <CiSearch />
          }
        </button>
      </header>
      <div className='notes__container'>
        {
          filteredNotes.length === 0
            ? <p className='empty__notes'>No notes found</p>
            : filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link to='/create-note' className='btn add__btn'><BsPlusLg /></Link>
    </section>
  );
}

export default Notes;