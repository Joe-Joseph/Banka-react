import {NEW_USER, LOGIN_USER, CREATE_ACCOUNT} from '../actions/types';

const initialState = {
    newUser : {},
    signupData: {},
    account: {},
    newErrors: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                newUser: action.payload,
                newErrors: action.newErrors
        }      

        case NEW_USER:
            return {
                ...state,
                signupData: action.payload,
                newErrors: action.newErrors
            }
        case CREATE_ACCOUNT:
            console.log('wapi', action.payload)
            return {
                ...state,
                account: action.payload,
                newErrors: action.newErrors
            }
        default:
            return state;
    }
}