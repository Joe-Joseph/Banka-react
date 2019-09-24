import {NEW_USER, LOGIN_USER, CREATE_ACCOUNT} from './types';
import axios from 'axios';

export const loginUser = (user) => async dispatch => {
    try{
        const request = await axios.post('https://banka-c-3-db.herokuapp.com/api/v2/auth/signin', user)
        dispatch({
            type: LOGIN_USER,
            payload: request.data.data,
            newErrors: ''
        })

    } catch (err) {
        const newErrors = err.response.data.error;
        dispatch({type: LOGIN_USER, newErrors})
    }
  };

  export const createUser = (userData) => async dispatch => {
    try{
        const request = await axios.post('https://banka-c-3-db.herokuapp.com/api/v2/auth/signup', userData)
        dispatch({
            type: NEW_USER,
            payload: request.data,
            newErrors: ''
        })

    } catch (err) {
        const newErrors = err.response.data.error;
        dispatch({type: NEW_USER, newErrors})
    }
  };

  export const createAccount = (accountType) => async dispatch => {
    try{
        const request = await axios.post('https://banka-c-3-db.herokuapp.com/api/v2/accounts', accountType, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token')}
        })
        dispatch({
            type: CREATE_ACCOUNT,
            payload: request.data,
            newErrors: ''
        });

    } catch (err) {
        const newErrors = err.response;
        dispatch({type: CREATE_ACCOUNT, newErrors})
    }
  };
