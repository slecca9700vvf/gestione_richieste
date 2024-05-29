import { createStore } from '@reduxjs/toolkit';
import combineReducers from "../Reducers/index";

// declare global {
//     interface Window{
//         __REACT_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
// const composeEnhancers = window.__REACT_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const appStore = createStore(combineReducers, composeEnhancers());

const saveStateToLocalStorage = (state:any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  }
  
  // Funzione per caricare lo stato da localStorage

const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  }
  
  // Carica lo stato persistente
  const persistedState = loadStateFromLocalStorage();
  
  // Crea lo store con lo stato persistente
  const appStore = createStore(combineReducers, persistedState);
  
  // Salva lo stato ogni volta che cambia
  appStore.subscribe(() => {
    saveStateToLocalStorage(appStore.getState());
  });

export default appStore;
