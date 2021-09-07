import {GameOfLife} from "../main/gameOfLife";

describe('Game Of Life', () => {
    describe("Given we have a live cell with fewer than two live neighbours", ()=>{
        it("should die",()=>{
            const gameOfLife = new GameOfLife()
            const cell = gameOfLife.shouldLive({positionX: 1, positionY: 2})
            expect(cell).toBe(false)
        })

    })

})