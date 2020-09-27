import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import UserReducer from "./User/Reducer";
import MovieReducer from "./Movies/reducer";
import MovieToWatchReducer from "./Movies/ToWatchReducer";
import MovieWatchingReducer from "./Movies/WatchingReducer";
import MovieWatchedReducer from "./Movies/WatchedReducer";
import ApplicationReducer from "./Application/reducer";
const rootReducer = combineReducers({
  UserReducer,
  MovieReducer,
  MovieToWatchReducer,
  MovieWatchingReducer,
  MovieWatchedReducer,
  ApplicationReducer,
});

const composeEnhancer =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
