import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BookList({ books, deleteBook }) {
  const handleRemoveBook = (book) => deleteBook(book);
  const bookList = books.map((book) => (
    <Book
      deleteBook={handleRemoveBook}
      book={book}
      key={book.id}
    />
  ));

  return (
    <table className="Book-list">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {bookList}
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
