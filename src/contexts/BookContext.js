import React, { useState, createContext } from 'react'
import uuid from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: '倚天屠龍記', id: uuid() },
    { title: '神鵰俠侶', id: uuid() },
    { title: '金瓶梅', id: uuid() },
    { title: '聊齋誌異', id: uuid() },
    { title: '三國演義', id: uuid() },
  ])
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;