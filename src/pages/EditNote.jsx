import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

function EditNote() {
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary'>Save</button>
        <button className='btn darger'><RiDeleteBin6Line /></button>
      </header>
      <form className='create-note__form'>
        <input type='text' placeholder='Title' autoFocus />
        <textarea rows='28' placeholder='Note details'></textarea>
      </form>
    </section>
  );
}

export default EditNote;