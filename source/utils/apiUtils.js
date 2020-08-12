import Axios from "axios";

export async function filteredFetch(options) {
    return await Axios(options
    ).then(response => {
        return response.data;
    }).catch(error => {
        return error.response.data;
    })
}
