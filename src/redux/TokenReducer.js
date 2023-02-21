import { DELET_TOKEN, SAVE_TOKEN } from "./TokenType"

const tokenStaete = {
    token: localStorage.getItem("token") || "",
}

export const tokenReducer = (stete = tokenStaete, action) => {
    switch (action.type) {
        case DELET_TOKEN : return{
            ...stete,
            token: action.payload
        }

        case SAVE_TOKEN : return{
            ...stete,
            token: action.payload
        }
        default:
            return stete
    }
}