import React from 'react'

import Cells from '../Cells'

import './Row.scss'

export const getContent = (row, cell) => row === 0 ? String.fromCharCode(64 + cell) : row

const Row = ({ cells = [], index }) => {
  return (
    <tr>
      {
        cells.map((_, i) => {
          const isHeader = i === 0 || index === 0
          const content = (i === 0 && index === 0) || (index !== 0 && i !== 0) ? '' : getContent(index, i)
          return <Cells
            key={i}
            cname={isHeader ? 'header' : ''}
            content={content}
          />
        })
      }
    </tr>
  )
}
export default Row
