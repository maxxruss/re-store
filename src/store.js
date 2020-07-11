import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

// const originalDispatch = store.dispatch;
//next - dispatch следующей по цепочке функции
//middleware - функция которая основана на store enchencer, и определяет, как будет работать dispatch
//у middleware есть доступ к getState и dispatch, есть ссылка (next) на dispatch следующей функции
const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }

  return next(action);
};

//monkey patching
// store.dispatch = (action) => {
//   if (typeof action === "string") {
//     return originalDispatch({
//       type: action,
//     });
//   }
// };

//applyMiddleware - store enchencer в составе redux
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

const delayedActionCreators = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAY_ACTION",
      }),
    timeout
  );
};

store.dispatch(delayedActionCreators(2000));

export default store;
