import { AppRootState } from "../store";

//loads the state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}


//saves the state to localStorage
export const saveState = (state: AppRootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app-state', serializedState);
  } catch {
    console.warn("Something went wrong")
  }
};