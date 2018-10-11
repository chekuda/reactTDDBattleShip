import React, { Component } from 'react'

import Row from '../../Components/Row'
import Ships from '../Ships'

class BoardContainer extends Component {
  constructor(props) {
    super(props)
    this.boardLength = 11
    this.rows =  Array(this.boardLength).fill(1)
    this.cells = Array(this.boardLength).fill(1)
    this.ships = new Ships(this.boardLength, [7, 7, 3, 3])
  }

  render() {
    return <div className="container-content">
      <table>
        <tbody>
        { this.rows.map((_, index) => <Row key={index} cells={this.cells} index={index}/>) }
        </tbody>
      </table>
    </div>
  }
}

export default BoardContainer
