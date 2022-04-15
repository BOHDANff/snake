export function createMatrix (matrixSize) {
    function createRow(rowNum) {
        const row = Array(matrixSize).fill(1)
        row.forEach((el, i) => {
            row[i] = {
                id: [i, rowNum],
                isBody: false,
                isApple: false
            }
        })
        return row
    }
    const matrix = Array(matrixSize).fill(1)
    matrix.forEach((el, i) => {
        matrix[i] = createRow(i)
    })
    return matrix
}
