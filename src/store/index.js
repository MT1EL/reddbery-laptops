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

import brandReducer from "./reducers/brandrReducer";
import teamReducer from "./reducers/teamReducer";
import postUserReducer from "./reducers/postUserReducer";
import positionReducer from "./reducers/positionReducer";
import postLaptopReducer from "./reducers/postLaptopReducer";
const presistConfig = {
  key: "counter",
  storage,
};

const reducers = combineReducers({
  brandReducer,
  teamReducer,
  positionReducer,
  postUserReducer,
  postLaptopReducer,
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
