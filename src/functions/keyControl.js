export function directionRuler(headX, headY, state) {
    const [lastX, lastY] = state.body[state.body.length - 1]
    const nextStep = nextHeadStep(state, headX, headY)
    return function (diffX, diffY) {
        if (state.matrix[headY + diffY] === undefined ||
            state.matrix[headY + diffY][headX + diffX] === undefined ||
            state.matrix[headY + diffY][headX + diffX].isBody === true)
        {
            clearBody(state)
            state.matrix[lastY][lastX].isBody = false
        }
        else if (state.matrix[headY + diffY][headX + diffX].isApple) {
            nextStep(diffX, diffY)
            state.matrix[lastY][lastX].isBody = true
            state.body.push([lastX, lastY])
            state.matrix[headY + diffY][headX + diffX].isApple = false
        } else {
            nextStep(diffX, diffY)
            state.matrix[lastY][lastX].isBody = false
        }
    }
}

function clearBody(state) {
    state.body.forEach((el, i) => {
        const [x, y] = el
        state.matrix[y][x].isBody = false
    })
    state.body = []
}

function nextHeadStep (state, headX, headY) {
    return function (diffX, diffY) {
        state.matrix[headY + diffY][headX + diffX].isBody = true
        state.body[0] = [headX + diffX, headY + diffY]
    }
}