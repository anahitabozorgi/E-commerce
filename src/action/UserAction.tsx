import {
    USER_INFO,
} from "./types";

export const userData:any = () => async (dispatch: any) => {
    try {
        const data = {
            username: "Anahita",
            fistName: "Anahita"
        }
        dispatch({
            type: USER_INFO,
            payload: data
        })
    }

    catch (e) {

    }
}