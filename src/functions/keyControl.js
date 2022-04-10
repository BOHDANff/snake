export function directionRuler(x, y, diffX, diffY ,state) {
    state.matrix[y][x].isBody = false
    if (state.matrix[y + diffY] === undefined ||
        state.matrix[y + diffY][x + diffX] === undefined)
    {
        state.body = []
        return null
    }
    state.matrix[y + diffY][x + diffX].isBody = true
    state.body[0] = [x + diffX, y + diffY]

}