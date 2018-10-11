import React from 'react'
import { shallow } from 'enzyme'

import BoardContainer from './BoardContainer'

describe('BoardContainer', () => {
  describe('when trying to render the BoardContainer', () => {
    const component = shallow(<BoardContainer />)
    const instance = component.instance()
    it('should render the component', () => {
      expect(component.length).toBe(1)
    })
    it('should render the same amount of rows in the constructor', () => {
      expect(component.find('Row').length).toBe(instance.rows.length)
    })
  })
})
