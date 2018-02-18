import axios from 'axios';

import Cookies from 'universal-cookie';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    PROTECTED_TEST
} from './types';

//import { checkLogin } from './token'
import  API_URL from "./apiURL";
//const API_URL = 'http://127.0.0.1:8000';
//const API_URL = 'https://timetapp.herokuapp.com';
const cookie = new Cookies();
//axios.defaults.withCredentials = true;

export function errorHandler(dispatch, error, type) {
    let errorMessage = '';

    if (error.data.error) {
        errorMessage = error.data.error;
    } else if (error.data) {
        errorMessage = error.data;
    } else {
        errorMessage = error;
    }

    if (error.status === 401) {
        dispatch({
            type: type,
            payload: 'You are not authorized to do this. Please login and try again.'
        });
        logoutUser();
    } else {
        dispatch({
            type: type,
            payload: errorMessage
        });
    }
}

export function loginUser({ email, password }, successFunction, errorFunction) {
    return function (dispatch) {
        //axios.defaults.withCredentials = true

        axios.post(`${API_URL}/accounts/auth/token/obtain/`, {
            email: email,
            password: password,
        }, {withCredentials:true}).then(
            (response) => {
               // cookie.set('token', response.data.token, { path: '/' });
                dispatch({ type: AUTH_USER });
                successFunction();
            },
            (error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR)
                errorFunction(error.response.data);
            })
    }
}

export function registerUser({ email, firstName, lastName, password }) {
    return function (dispatch) {
        axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
            .then(response => {
                cookie.save('token', response.data.token, { path: '/' });
                dispatch({ type: AUTH_USER });
                //window.location.href = CLIENT_ROOT_URL + '/dashboard';
            })
            .catch((error) => {
                errorHandler(dispatch, error.response, AUTH_ERROR)
            });
    }
}

export function logoutUser() {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        //cookie.remove('token', { path: '/' });

        //   window.location.href = CLIENT_ROOT_URL + '/login';
    }
}

// export function protectedTest() {
//     return function (dispatch) {
//         axios.get(`${API_URL}/protected`, {
//             headers: { 'Authorization': cookie.load('token') }
//         })
//             .then(response => {
//                 dispatch({
//                     type: PROTECTED_TEST,
//                     payload: response.data.content
//                 });
//             })
//             .catch((error) => {
//                 errorHandler(dispatch, error.response, AUTH_ERROR)
//             });
//     }
// }

export * from './token'