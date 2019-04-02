import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../../utils/isEmpty";

const initialState = {
    isAuthenticated: false,
    user: {}
};


export default (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user

            }
        default:
            return state
    }
}