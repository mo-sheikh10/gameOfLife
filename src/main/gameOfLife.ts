interface Position {
    positionX: number,
    positionY: number
}

type Grid = number[][]
export class GameOfLife {
    private grid: Grid

    constructor(grid: Grid) {
        this.grid = grid
    }

    shoudLive(position: Position){
        let liveNeighbours = 0
        for (let i = (position.positionY - 1); i <= (position.positionY + 1); i++) {
            for (let j = (position.positionX - 1); j <= (position.positionX + 1); j++) {
                if (i == position.positionY && j == position.positionX){
                    continue
                }
                if (this.grid[i][j] == 1){
                    liveNeighbours++
                }
            }
        }

        if (liveNeighbours < 2) {
            return false
        }
        if(liveNeighbours === 3){
            return true
        }


    }

}
// (i-1,j-1) (i-1,j) (i-1,j+1)
// (i  ,j-1)    1    (i  ,j+1)
// (i+1,j-1) (i+1,j) (i+1,j+1)