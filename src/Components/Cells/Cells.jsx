import React from 'react'

import './Cells.scss'

const Cells = ({ cname = '', content = '' }) => {
  return <td className={cname}>{content}</td>
}

export default Cells
