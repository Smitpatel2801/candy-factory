import { combineReducers } from "redux";
import { orderReducer } from "./ApiSlice/orderSlice";
import { ingredientReducer } from "./ApiSlice/ingredientSlice";
import { candyTypeReducer } from "./ApiSlice/candyTypeSlice";
import { assemblyLineReducer } from "./ApiSlice/assemblyLineSlice";

export const rootReducer = combineReducers({
    orders:orderReducer,
    ingredient:ingredientReducer,
    candyType : candyTypeReducer,
    assemblyLine : assemblyLineReducer,
});
