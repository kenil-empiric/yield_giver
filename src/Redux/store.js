import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import walletReducer from "./Reducer/walletSlice";
import isCheckReducer from "./Reducer/isSignCheck";
import contractReducer from "./Reducer/contractSlice";
import isKYCReducer from "./Reducer/isKYCCheck";
import isPlanReducer from "./Reducer/planSlice";
import isPlanRate from "./Reducer/planRateSlice";
import isAdmin from "./Reducer/isAdminSlice";
import expireReducer from "redux-persist-expire";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "walletDetails",
    "isSignChecked",
    "contractDetails",
    "isKYCDetail",
    "planData",
    "planRate",
    "IsAdmin",
  ],
  transforms: [
    expireReducer("isSignChecked", {
      expireSeconds: 43200,
      expiredState: {
        sign_hash: "",
      },
      autoExpire: true,
    }),
    expireReducer("walletDetails", {
      expireSeconds: 43200,
      expiredState: {
        Address: "",
        balance: "",
        USDC: "",
      },
      autoExpire: true,
    }),
    expireReducer("isKYCDetail", {
      expireSeconds: 43200,
      expiredState: {
        KYC: "",
      },
      autoExpire: true,
    }),
    expireReducer("IsAdmin", {
      expireSeconds: 43200,
      expiredState: {
        isAdmin: false,
      },
      autoExpire: true,
    }),
  ],
};

const rootReducer = combineReducers({
  walletDetails: walletReducer,
  isSignChecked: isCheckReducer,
  contractDetails: contractReducer,
  isKYCDetail: isKYCReducer,
  planData: isPlanReducer,
  planRate: isPlanRate,
  IsAdmin: isAdmin,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
