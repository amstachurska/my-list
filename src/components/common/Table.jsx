import React from 'react'
import { get } from 'lodash'
import PropTypes from 'prop-types'

const Table = (props) => {
  const { headers, dataList } = props
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            ;<th>{get(header, 'title', '-')}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {dataList.map((item, itemIndex) => (
          <tr key={`item-${itemIndex}`}>
            {/* {headers.map(header => (
                            <th>{get(item, 'render')}</th>
                        ))} */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.object,
}

export default Table
