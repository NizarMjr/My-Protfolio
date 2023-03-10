import { combineReducers } from "redux";
import { reducerChangeColor } from "./reducer";
const reducers = combineReducers({
    selectedColor: reducerChangeColor,
})
export default reducers;