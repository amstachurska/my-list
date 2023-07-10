import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Alert } from './Alert'

export const Alerts = () => {
  const alert = useSelector((store) => store.alerts.alert)
  const [alertsList, setAlertsList] = useState([])

  useEffect(() => {
    if (alert?.id) {
      setAlertsList((prevAlertsList) => {
        let updatedList = [...prevAlertsList]
        updatedList.reverse()
        updatedList.push(alert)
        updatedList.reverse()
        return updatedList
      })
      const timeout_id = setTimeout(() => {
        setAlertsList((prevAlertsList) => {
          const updatedList = [...prevAlertsList]
          updatedList.shift()
          return updatedList
        })
        clearTimeout(timeout_id)
      }, 3000)
    }
  }, [alert, setAlertsList])

  return (
    <ul className="alerts">
      {alertsList.map((alert, index) => (
        <Alert
          key={index}
          message={alert?.message || ''}
          type={alert?.type?.toLowerCase() || null}
        />
      ))}
    </ul>
  )
}

Alerts.propTypes = {
  alertsList: PropTypes.string,
}

export default Alerts
