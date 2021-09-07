interface Position {
    positionX: number,
    positionY: number
}
export class GameOfLife {
    private grid: number[][]

    constructor() {
        this.grid = [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]            
        ]
    }

    shouldLive(position: Position){
        let count = 0
        this.grid[position.positionX, position.positionY]

        for (let i = (position.positionY - 1); i <= (position.positionY + 1); i++) {
            for (let j = (position.positionX - 1); j <= (position.positionX + 1); j++) {
                if (i == position.positionY && j == position.positionX){
                    continue
                }
                if (this.grid[i][j] == 1){
                    count++
                }
            }
        }
        if (count < 2) {
            return false
        }
        return true
    }
    
}
// (i-1,j-1) (i-1,j) (i-1,j+1)
// (i  ,j-1)    1    (i  ,j+1)
// (i+1,j-1) (i+1,j) (i+1,j+1)