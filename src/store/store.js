import { createStore } from "redux";
import mainReducer from "./reducer";
const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem("app_state", serialisedState);
};
const loadState = () => {
  const serialisedState = window.localStorage.getItem("app_state");
  if (!serialisedState) {
    return undefined;
  }
  return JSON.parse(serialisedState);
};
const stateFromLS = loadState();
const store = createStore(mainReducer, stateFromLS);
store.subscribe(() => {
  saveState(store.getState());
});
window.store = store;
export default store;
