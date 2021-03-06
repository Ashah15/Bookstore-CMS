const addBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});

export { addBook, removeBook, changeFilter };
