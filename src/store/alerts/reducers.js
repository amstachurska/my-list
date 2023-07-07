import { ALERT_CLEAR, ALERT_ERROR, ALERT_REMOVE, ALERT_SUCCESS } from './types'

const initialStore = { alertList: [], alert: {} }
export const alerts = (store = initialStore, action) => {
  switch (action.type) {
    case ALERT_CLEAR: {
      return {
        alertList: [],
        alert: {},
      }
    }

    case ALERT_ERROR: {
      const updatedList = [...store.alertList]
      // const id = updatedList.length ? updatedList[-1].id + 1 : 1
      updatedList.push({
        id: action.payload.id,
        type: 'alert-error',
        message: action.payload.message,
      })
      return {
        alertList: updatedList,
        alert: {
          id: action.payload.id,
          type: 'alert-error',
          message: action.payload.message,
        },
      }
    }

    case ALERT_REMOVE: {
      const updatedList = store.alertList.filter(
        (alert) => alert.id !== action.payload.id
      )
      return {
        //nie wiem czy tutaj musi byc destrukturyzacja bo juz wczesniej byla
        alertList: updatedList,
        alert: {},
      }
    }

    case ALERT_SUCCESS: {
      const updatedList = [...store.alertList]
      // const id = updatedList.length ? updatedList[updatedList.length - 1].id + 1 : 1
      updatedList.push({
        id: action.payload.id,
        type: 'alert-success',
        message: action.payload.message,
      })
      return {
        alertList: updatedList,
        alert: {
          id: action.payload.id,
          type: 'alert-success',
          message: action.payload.message,
        },
      }
    }

    default: {
      return {
        ...store,
      }
    }
  }
}

export default alerts
