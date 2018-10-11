import React from 'react'
import { shallow } from 'enzyme'

import Board from './Board'

describe('Board', () => {
  describe('when trying to render the Board', () => {
    const component = shallow(<Board />)
    it('should render the Board Component', () => {
      expect(component.length).toBe(1)
    })
    it('it should render boardContainer', () => {
      expect(component.find('BoardContainer').length).toBe(1)
    })
  })
})
