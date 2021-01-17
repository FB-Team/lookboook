import React from 'react';
import Book from './Book/Book';
import s from './Lib.module.css'

export const Lib = (props) => {
  let books = []
  if (props.books){
    books = props.books.map ((book, i) => <Book key={i} book={book}/>)
  return (
    <div className='container__lib row justify-content-center'>{books}</div>
  )}else{
    return "No books found";
  }
}
export default Lib
