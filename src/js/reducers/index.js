import { combineReducers } from 'redux';
import postReducer from './postReducer'

export default combineReducers({
    newUser: postReducer,
    signupData: postReducer,
    newErrors: postReducer
})