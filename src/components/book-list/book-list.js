import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { fetchBooks, onAddedToCard } from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { bindActionCreators } from "redux";

const Booklist = ({ books, onAddedToCard }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <BookListItem
              book={book}
              onAddedToCard={() => onAddedToCard(book.id)}
            ></BookListItem>
          </div>
        );
      })}
    </div>
  );
};

//*Container - code convention, так называется обертка для BookList
class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    //1. Reseve data from store
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError,
    // } = this.props;
    // booksRequested();
  }

  render() {
    const { books, loading, error, onAddedToCard } = this.props;
    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;
    return <Booklist books={books} onAddedToCard={onAddedToCard} />;
  }
}

//функция описывает, какие данные мы хоиим получить из redux store
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

//функция описывает, какие действия мы хотим передать в redux store (прямой доступ к dispatch).
//mapDispatchToProps может быть функцией или объектом.
//Если это объект то он передается в bindActionCreators
//bindActionCreators вызывает dispatch после вызова action
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCard,
    },
    dispatch
  );
};

//Начинаем со store, где изначальный state = []
//далее connect оборачивает BookList в компонент высшего порядка, который подключается к redux store
//мы конфигурируем как именно это подключение будет работать со store
//получаем сервис bookstoreService с помощью withBookstoreService
//с помошью этой конструкции получаем внутри класса доступ к свойствам внутри mapStateToProps и к action внутри mapDispatchToProps
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
