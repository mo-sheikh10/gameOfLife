interface Position {
    positionX: number,
    positionY: number
}
export class GameOfLife {
    private grid: number[][]

    constructor() {
        this.grid = [
            [],[],[],[],[],
            [],[],[],[],[],
            [],[],[],[],[],
            [],[],[],[],[],
            [],[],[],[],[]
        ]
    }

    isAlive(position: Position){
        return true

    }
    add(a: number, b: number) {
        return a + b;
    }
}