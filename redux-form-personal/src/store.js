import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import { loadState, saveState } from "./redux-localstore";
import throttle from "lodash/throttle";
const reducer = combineReducers({
  form: reduxFormReducer
});

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    form: store.getState().form
  });
});
export default store;
