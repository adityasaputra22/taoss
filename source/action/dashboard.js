export const GET_DOWNLINK = "GET_DOWNLINK";
export const GET_DOWNLINK_SUCCESS = "GET_DOWNLINK_SUCCESS";
export const GET_DOWNLINK_ERROR = "GET_DOWNLINK_ERROR";

export const GET_UPLINK = "GET_UPLINK";
export const GET_UPLINK_SUCCESS = "GET_UPLINK_SUCCESS";
export const GET_UPLINK_ERROR = "GET_UPLINK_ERROR";

export const GET_MODEM = "GET_MODEM";
export const GET_MODEM_SUCCESS = "GET_MODEM_SUCCESS";
export const GET_MODEM_ERROR = "GET_MODEM_ERROR";

export const GET_HEADLINE = "GET_HEADLINE";
export const GET_HEADLINE_SUCCESS = "GET_HEADLINE_SUCCESS";
export const GET_HEADLINE_ERROR = "GET_HEADLINE_ERROR";

export function getDownlink(data) {
    return {
        type: GET_DOWNLINK,
        data: data
    }
}

export function getUplink(data) {
    return {
        type: GET_UPLINK,
        data: data
    };
}

export function getModem(data) {
    return {
        type: GET_MODEM,
        data: data
    };
}

export function getHeadline(data) {
    return {
        type: GET_HEADLINE,
        data: data
    };
}