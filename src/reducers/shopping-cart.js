const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};

const deleteCartItems = (cartItems, idx) => {
  return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
};

const removeCartItem = (book, item) => {
  const { id, title, count, total } = item;

  return {
    id,
    title,
    count: count - 1,
    total: total - book.price,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  const bookId = action.payload;
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  let newItem;

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      //обновляем массив с данными о конкретной книге
      newItem = updateCartItem(book, item);
      // возвращаем обновленный state
      return {
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: 0,
      };

    case "BOOK_REMOVED_FROM_CART":
      //обновляем массив с данными о конкретной книге
      newItem = removeCartItem(book, item);
      // возвращаем обновленный state
      return {
        cartItems:
          item.count === 1
            ? deleteCartItems(cartItems, itemIndex)
            : updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: 0,
      };

    case "ALL_BOOKS_REMOVED_FROM_CART":
      // возвращаем обновленный state
      return {
        cartItems: deleteCartItems(cartItems, itemIndex),
        orderTotal: 0,
      };

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
