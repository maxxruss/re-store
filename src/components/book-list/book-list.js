import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { bindActionCreators } from "redux";
import { booksLoaded } from "../../actions";
import compose from "../../utils";

class BookList extends Component {
  componentDidMount() {
    //1. Reseve data from store
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    //2. Dispatch action to store - insert new book
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              <BookListItem book={book}></BookListItem>
            </div>
          );
        })}
      </div>
    );
  }
}

//функция описывает, какие данные мы хоиим получить из redux store
const mapStateToProps = ({ books }) => {
  return { books };
};

//функция описывает, какие действия мы хотим передать в redux store. mapDispatchToProps может быть функцией или объектом. Если это объект
//то он передается в bindActionCreators
const mapDispatchToProps = (dispatch) => {
  //bindActionCreators - создает нужное действие и передает его в dispatch
  return bindActionCreators({ booksLoaded }, dispatch);
};

//Начинаем со store, где изначальный state = []
//далее connect оборачивает BookList в компонент высшего порядка, который подключается к redux store
//мы конфигурируем как именно это подключение будет работать со store
//получаем сервис bookstoreService с помощью withBookstoreService
//с помошью этой конструкции получаем внутри класса доступ к свойствам внутри mapStateToProps и к action внутри mapDispatchToProps
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
