import {combineReducers} from "redux";
import {registration} from "./registration";

export const rootReducer = combineReducers({
  registration: registration
})

export type RootType = ReturnType<typeof rootReducer>