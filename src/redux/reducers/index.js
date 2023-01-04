import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import profile from "./profile";
import transaction from "./transaction";

const authConfig = {
  key: "auth",
  storage,
  blacklist: ["message"],
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile: profile,
  transaction: transaction,
});

export default reducer;
