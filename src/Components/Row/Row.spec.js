import React from 'react'
import { shallow } from 'enzyme'

import Row, { getContent }  from './Row'

describe('Row', () => {
  describe('when trying to render the Row', () => {
    const component = shallow(<Row />)
    it('should render the component', () => {
      expect(component.length).toBe(1)
    })
    it('when trying to render a row', () => {
      expect(component.find('tr').length).toBe(1)
    })
  })
  describe('and cells are passing', () => {
    const props = {
      cells: Array(11).fill(1)
    }
    const component = shallow(<Row {...props} />)
    it('should render all the cells', () => {
      expect(component.find('Cells').length).toBe(props.cells.length)
    })
    describe('when trying to render the first row',() => {
      const newProps = {
        ...props,
        index: 0
      }
      const component = shallow(<Row {...newProps} />)
      const cells = component.find('Cells')
      it('should pass classname header to every cell', () => {
        const cellswithClassName = cells.findWhere(cell => cell.props().cname === 'header')

        expect(cellswithClassName.length).toBe(props.cells.length)
      })
      it('should pass the right letter for every cell', () => {
        cells.forEach((cell, index) => {
          if(index !== 0) {
            expect(cell.props().content).toBe(getContent(newProps.index, index))
          }
        })
      })
    })
    describe('when trying to render the second row', () => {
      const newProps = {
        ...props,
        index: 1
      }
      const component = shallow(<Row {...newProps} />)
      it('should pass the number of the cell as a content for the first cell', () => {
        expect(component.find('Cells').get(0).props.content).toBe(newProps.index)
      })
    })
  })
})
