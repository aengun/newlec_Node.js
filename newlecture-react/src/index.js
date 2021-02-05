import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import AuthReducer from './reducer/AuthReducer';
// import { createStore } from "redux";

// const store = createStore(AuthReducer);
// //Header에서
// store.subscribe(() => { // subscribe : event
//   console.log(store.getState());
// }); 
// //Login.js에서 사용
// store.dispatch({type:1, userName:"newlec"});
// store.dispatch({type:2, userName:"dragon"});

//==========================================================

// import AuthStore from "./reducer/AuthStore";

// AuthStore.create();
// AuthStore.addEventListener((state) => {
//   console.log(state);
// });
// AuthStore.setState(1, { userName: "newlec" });
// AuthStore.setState(2, { userName: null });

//==========================================================
// import AuthReducer from './reducer/AuthReducer';
// import AuthStore from "./reducer/AuthStore";
// import { createStore } from "redux";

// AuthStore.store = createStore(AuthReducer);
// // Header에서
// AuthStore.addEventListener((state) => {
//   console.log(state);
// });

// // Login.js에서 사용
// AuthStore.store.dispatch({ type: 1, userName: "newlec" });
// AuthStore.store.dispatch({ type: 2, userName: "dragon" });

//==================================================

import { createStore } from "redux";
import { Provider } from "react-redux"
import AuthReducer from "./reducer/AuthReducer";
const store = createStore(AuthReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();