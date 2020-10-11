import React from 'react';
import Book from './Book/Book';

export const Lib = (props) => {
  const books = []
  if (props.books)
    books = props.books ((book, i) => <Book key={i} book={book}/>)
  return (
    <div className={s.booksContainer}>{books}</div>
  )
}
export default Lib
