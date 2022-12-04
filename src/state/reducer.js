import { combineReducers } from "redux";

import { userReducer } from "./user/reducer";
import { enlistmentReducer } from "./enlistment/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    enlistment: enlistmentReducer
})