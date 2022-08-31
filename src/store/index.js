import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import postContainerReducer from "./reducers/postContainerReducer";
import postLaptopReducer from "./reducers/postLaptopReducer";
import postUserReducer from "./reducers/postUserReducer";
import setCurrentReducer from "./reducers/setCurrentPost";
const presistConfig = {
  key: "counter",
  storage,
};

const reducers = combineReducers({
  postContainerReducer,
  postLaptopReducer,
  postUserReducer,
  setCurrentReducer,
});

const persist = persistReducer(presistConfig, reducers);

const store = configureStore({
  reducer: persist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
