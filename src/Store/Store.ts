import { createStore } from 'redux';
// import { compose } from 'redux';
import reducer from "../Reducers/index";

// declare global {
//     interface Window{
//         __REACT_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
// const composeEnhancers = window.__REACT_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const appStore=createStore(reducer, composeEnhancers());
export const appStore=createStore(reducer);