import React from 'react';
import './App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

const App = () => (
  <div>
    <BookList />
    <BookForm />
  </div>
);

export default App;
