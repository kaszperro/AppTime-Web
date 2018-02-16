import axios from 'axios';
import API_URL from "./apiURL";

export function checkLogin(loggedIn, loggedOut) {
    axios.post(`${API_URL}/accounts/auth/token/verify/`,{},{withCredentials:true}).then(
        (response) => {
            loggedIn()
        },
        (error) => {
            loggedOut()
        })
}