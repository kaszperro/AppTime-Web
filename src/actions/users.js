import axios from 'axios';
import API_URL from "./apiURL";
//import {stringify, parse, extract, replace} from '@m59/qs'

export function getUserInfo(fields, successFunction=null, errorFunction=null) {
    axios.get(`${API_URL}/accounts/user-info/`, {
        params: {
            fields: fields
        },
        paramsSerializer: function (params) {
            let myOut = "";
            for (let par in params) {
                myOut += par + "=";
                for(let f in params[par]) {
                    myOut += params[par][f]
                    if(f < params[par].length-1) {
                        myOut += ","
                    }

                }
            }
            return myOut

           // return stringify(params, {arrayFormat: {delimiter: ','}})
        },
        withCredentials: true,
    }).then(
        (response) => {
            if (successFunction) {
                successFunction(response.data)
            }

        },
        (error) => {
            if (errorFunction) {
                errorFunction(error)
            }
        })
}