import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

//В корневом index.js пробрасываем сервис через поставщик-провайдер: <BookstoreServiceProvider value={bookstoreService}> 
//Получателем-провайдером контекста отлавливаем bookstoreService в текущей функции, выполняем рендер функцию, которая на вход принимает этот отлавливаемый сервис 
//(bookstoreService) и прокидывает в оборачиваемый элемент Wrapped, например в App. В app оборачиваем: export default withBookstoreService()(App) 
//и внутри функции app на вход принимаем как раз отлавливаемый сервис (bookstoreService) и там его используем

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export {withBookstoreService};
