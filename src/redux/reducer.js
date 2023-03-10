import { Types } from "./Types";

const defaulColor = '#20c997';

export const reducerChangeColor = (state = defaulColor, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_COLOR: {
            state = payload;
            return state;
        }
        default: return state;
    }
}