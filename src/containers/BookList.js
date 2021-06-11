import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BookList({ books }) {
  const bookList = books.map(book => (
    <Book
      book={book}
      key={book.id}
    />
  ));
  return (
    <table className="Books-list">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Category</th>
          <th>Book Title</th>
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
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);