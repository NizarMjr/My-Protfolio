import { Types } from "./Types";

export const change_color = (data) => {
    return {
        type: Types.CHANGE_COLOR,
        payload: data,
    }
}