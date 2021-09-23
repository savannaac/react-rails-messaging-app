import { alertConstants } from "../Constants/AlertConstants";

export const Alerts = {
    success, 
    error,
    clear 
};

function success(message="yay! :)") {
    return { type: alertConstants.SUCCESS, message };
}

function error(message="oops, something went wrong :(") {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}