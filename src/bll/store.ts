import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { ActionCounterType, counterReducer } from './reducer/counterReducer'
import { ThunkAction, ThunkDispatch, thunk } from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage-utils";

export const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})

export type AppDispatchType = ThunkDispatch<AppRootState, unknown, ActionCounterType>
export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionCounterType>//in thunk to dispatch other thunk and any actions(like a main type)

// @ts-ignore
window.store = store;