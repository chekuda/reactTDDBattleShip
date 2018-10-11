import Ships from'./Ships'

import { getRandomFirstPlace } from '../../helpers/random'

jest.mock('../../helpers/random')

describe('given a boardLength and ships', () => {
  const boardLength = 11
  describe('when trying to create the ship', () => {
    describe('and ship ocupy 4 spaces', () => {
      afterEach(() => {
        jest.resetAllMocks()
      })
      describe('and the ship fits horizontaly', () => {
        it('the ship will be tried to be placed horizontaly', () => {
          getRandomFirstPlace.mockImplementation(() => [1, 65])
          const component = new Ships(boardLength, [4])
          expect(component.ships).toEqual([[[1, 65], [1, 66], [1, 67], [1, 68]]])
        })
      })
      describe('and the ship doesnt fit horizontaly', () => {
        describe('and the ship fit verticaly', () => {
          it('the ship will be placed verticaly', () => {
            getRandomFirstPlace.mockImplementation(() => [2, 74])
            const component = new Ships(boardLength, [4])
            expect(component.ships).toEqual([[[2, 74], [3, 74], [4, 74], [5, 74]]])
          })
        })
      })
      describe('and the ship doesnt fit horizontaly neither verticaly', () => {
        it('ship will be try to be placed in another place', () => {
          const firstPlaces = [[9, 73], [3, 69]]
          let i = 0
          getRandomFirstPlace.mockImplementation(() => firstPlaces[i++])
          const component = new Ships(boardLength, [3])
          expect(component.ships).toEqual([[[3, 69], [3, 70], [3, 71]]])
          expect(getRandomFirstPlace).toHaveBeenCalledTimes(2)
        })
      })
      describe('and the ship fit horizontaly but clash with other ship', () => {
        it('the ship will be try to be placed verticaly', () => {
          const firstPlaces = [[5, 70], [5, 68]]
          let i = 0
          getRandomFirstPlace.mockImplementation(() => firstPlaces[i++])
          const component = new Ships(boardLength, [3, 4])
          expect(component.ships).toEqual([[[5, 70], [5, 71], [5, 72]], [[5, 68], [6, 68], [7, 68], [8, 68]]])
        })
      })
    })
  })
})