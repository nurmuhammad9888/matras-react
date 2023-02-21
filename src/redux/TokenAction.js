import { DELET_TOKEN, SAVE_TOKEN } from "./TokenType"

export const saveToken = (token) => {
    return{
        type:SAVE_TOKEN,
        payload:token
    }
}

export const deletToken = () => {
    return{
        type:DELET_TOKEN,
        payload:''
    }
}
