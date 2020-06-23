const { bindActionCreators } = require("redux");

const initialState = {
  books: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_LOADED":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reduser;
