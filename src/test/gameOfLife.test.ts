import {GameOfLife} from "../main/gameOfLife";

describe('Game Of Life', () => {
    describe("Given we have a live cell ", ()=>{
        it("should die if fewer than two live neighbours",()=>{
           let grid =  [
                [0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 1, positionY: 1})
            expect(cell).toBe(false)
        })
        it("should live if three live neighbours",()=>{
            let grid =  [
                [0, 1, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ]
            const gameOfLife = new GameOfLife(grid)
            const cell = gameOfLife.shoudLive({positionX: 1, positionY: 1})
            expect(cell).toBe(true)
        })

    })

})