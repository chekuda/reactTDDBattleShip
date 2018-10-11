import React from 'react'
import { shallow } from 'enzyme'

import Cells from './Cells'

describe('Cells', () => {
  describe('when trying to render a cell', () => {
    it('it should render a cell',() => {
      const component = shallow(<Cells />)
      expect(component.length).toBe(1)
    })
    describe('when passing the classname', () => {
      it('should render the classname', () => {
        const cname = 'class'
        const component = shallow(<Cells cname={cname} />)
        expect(component.find('td').props().className).toBe(cname)
      })
    })
    describe('when passing the text', () => {
      it('should render the content', () => {
        const content = 'content'
        const component = shallow(<Cells content={content} />)
        expect(component.find('td').text()).toBe(content)
      })
    })
  })
})
