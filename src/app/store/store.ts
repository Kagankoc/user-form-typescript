import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers/rootReducer";
import middleware from "./middleware/middleware";
const middlewareEnchancers = applyMiddleware(middleware);
const store = createStore(rootReducer,middlewareEnchancers);


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;