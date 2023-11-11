import { Types } from "./Types";

export const change_color = (data) => {
    return {
        type: Types.CHANGE_COLOR,
        payload: data,
    }
}
export const switchDarkMode = (payload) => {
    return {
        type: Types.DARK,
        payload: payload,
    }
}