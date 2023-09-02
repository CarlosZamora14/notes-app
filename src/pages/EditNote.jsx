import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

// Hooks
import useCreateDate from '../hooks/useCreateDate';

function EditNote({ setNotes }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { note } = location.state;
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  function handleSubmit(e) {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date: useCreateDate() };
      setNotes(prevNotes => {
        let newNotes = prevNotes.filter(item => item.id !== note.id);
        newNotes.unshift(newNote);

        return newNotes;
      });

      navigate('/');
    }
  }

  function handleDelete() {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(prevNotes => {
        const newNotes = prevNotes.filter(item => item.id !== note.id);
        return newNotes;
      });
      navigate('/');
    }
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick={handleSubmit}>Save</button>
        <button className='btn darger' onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className='create-note__form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
        <textarea rows='28' placeholder='Note details' value={details} onChange={e => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  );
}

export default EditNote;