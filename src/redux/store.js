import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import mainReducer from "./reducers/reducers";
import jobReduce from "./reducers/jobReduce";
import loadReduce from "./reducers/loadReduce";

const configurePersist = {
  key: "root",
  storage,
  blacklist: ["loadingState"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_LOCAL_STORAGE_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const allReducer = combineReducers({
  favorite: mainReducer,
  saveJob: jobReduce,
  loadingState: loadReduce,
});

const persRed = persistReducer(configurePersist, allReducer);

export const store = configureStore({
  reducer: persRed,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
