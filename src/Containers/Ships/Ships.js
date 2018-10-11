import { getRandomFirstPlace } from '../../helpers/random'

class Ships {
  constructor(boardLength, shipsLength){
    this.shipsLength = shipsLength
    this.boundaries = {
      xMax: 65 + boardLength - 1,
      yMax: boardLength - 1,
    }
    this.directions = {
      horizontal: [0, 1],
      vertical: [1, 0],
    }
    this.ships = this.shipsLength.reduce((acc, sLenght) => {
      acc.push(this.addShip(sLenght, acc))
      return acc
      }, [])
    // console.log(this.ships)
  }

  createNewShip(firstPlace, shipLength, vertical, horizontal) {
    return Array(shipLength).fill(1).reduce((acc, _, index) => {
       acc.push([firstPlace[0] + (index * vertical), firstPlace[1] + (index * horizontal)])
       return acc
     },[])
   }

   fitWithinBoundaries(dir, firstPlace, shipLength) {
     switch(dir) {
       case 'horizontal':
         return firstPlace[1] + shipLength <= this.boundaries.xMax && this.directions[dir]
       case 'vertical':
         return firstPlace[0] + shipLength <= this.boundaries.yMax && this.directions[dir]
       default:
         return []
     }
   }

   isClashingWithOther(newShip, ships) {
     return ships
      .some(ship => ship
        .some(cell => newShip
          .some(newCell => newCell.join('') === cell.join(''))))
   }

   addShip(shipLength, ships) {
     const firstPlace = getRandomFirstPlace([1, 65])

     return ['horizontal', 'vertical'].reduce((acc, dir, index) => {
        const direction = this.fitWithinBoundaries(dir, firstPlace, shipLength)

        if(acc.length === 0) {
          if(direction) {
              const newShip = this.createNewShip(firstPlace, shipLength, direction[0], direction[1])
              return this.isClashingWithOther(newShip, ships)
                ? acc
                : newShip
          } else if(index === 1) {
            return this.addShip(shipLength, ships)
          }
        }
        return acc
     }, [])
   }
}

export default Ships