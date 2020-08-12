export const GET_MAINTENANCE_FORM = "GET_MAINTENANCE_FORM";
export const GET_MAINTENANCE_FORM_SUCCESS = "GET_MAINTENANCE_FORM_SUCCESS";
export const GET_MAINTENANCE_FORM_ERROR = "GET_MAINTENANCE_FORM_ERROR";

export const DELETE_MAINTENANCE_FORM = "DELETE_MAINTENANCE_FORM";
export const DELETE_MAINTENANCE_FORM_SUCCESS = "DELETE_MAINTENANCE_FORM_SUCCESS";
export const DELETE_MAINTENANCE_FORM_ERROR = "DELETE_MAINTENANCE_FORM_ERROR";



export function getMaintenanceForm(data) {
    return {
        type: GET_MAINTENANCE_FORM,
        data: data
    }
}

export function deleteMaintenanceForm(data) {
    return {
        type: DELETE_MAINTENANCE_FORM,
        data: data
    };
}