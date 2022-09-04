import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({});
export const store = createStore();

export type RootState = ReturnType<typeof store.getSate>;
export type AppDispatch = typeof store.dispatch;
