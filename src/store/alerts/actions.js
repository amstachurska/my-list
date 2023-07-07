import { ALERT_CLEAR, ALERT_ERROR, ALERT_REMOVE, ALERT_SUCCESS } from "./types"

const clear = () => ({
    type: ALERT_CLEAR,
})

const error = (message) => ({
    type: ALERT_ERROR,
    payload: {message}
})

const removeAlert = (id) => ({
    type: ALERT_REMOVE,
    payload: { id },
})

const success = (message) => ({
    type: ALERT_SUCCESS,
    payload: {message}
})

export default {
    clear,
    error,
    removeAlert,
    success,
}