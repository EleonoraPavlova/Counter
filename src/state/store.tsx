import { combineReducers, createStore } from "redux";
import { counterReducer } from './reducer/counterReducer'

export const rootReducer = combineReducers({
  counter: counterReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;
