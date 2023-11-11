import { Types } from "./Types";

const defaulColor = '#20c997';
const darkMode = false;

export const reducerChangeColor = (state = defaulColor, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_COLOR: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerSwitchDarkMode = (state = darkMode, { type, payload }) => {
    switch (type) {
        case Types.DARK: {
            state = payload;
            return state;
        }
        default: return state;
    }
}