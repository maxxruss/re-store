//action naming, code convention ТИП ЗАПРОСА_ОБЪЕКТ_ДЕЙСТВИЕ
const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

export const onAddedToCard = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};

// export const onIncrease = (bookId) => {
//   return {
//     type: "BOOK_INCREASE_FROM_CART",
//     payload: bookId,
//   };
// };

export const bookRemovedFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: "ALL_BOOKS_REMOVED_FROM_CART",
    payload: bookId,
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => {
      //2. Dispatch action to store - insert new book
      dispatch(booksLoaded(data));
    })
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
