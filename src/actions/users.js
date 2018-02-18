import axios from 'axios';
import API_URL from "./apiURL";
import {stringify, parse, extract, replace} from '@m59/qs'

export function getUserInfo(fields, successFunction=null, errorFunction=null) {
    axios.get(`${API_URL}/accounts/user-info/`, {
        params: {
            fields: fields
        },
        paramsSerializer: function (params) {
            return stringify(params, {arrayFormat: {delimiter: ','}})
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