import { combineReducers } from "redux";
import { reducerChangeColor, reducerSwitchDarkMode } from "./reducer";
const reducers = combineReducers({
    selectedColor: reducerChangeColor,
    DarkMode: reducerSwitchDarkMode,
})
export default reducers;