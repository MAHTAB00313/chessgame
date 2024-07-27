const fun = () => {
    alert("hello")
}

// For each square
const Square = (color, id, piece) => {
    return { color, id, piece }
}

const squareRow = (rowId) => {
    const rows = [];
    const charArr = ["a", "b", "c", "d", "e", "f", "g", "h"];

    if (rowId % 2 == 0) {
        charArr.forEach((ele, idx) => {
            if (idx % 2 == 0) {
                rows.push(Square("white", ele + rowId, null));
            } else {
                rows.push(Square("black", ele + rowId, null));

            }

        })
    }
    else {
        charArr.forEach((ele, idx) => {
            if (idx % 2 == 0) {
                rows.push(Square("black", ele + rowId, null));
            } else {
                rows.push(Square("white", ele + rowId, null));
            }

        })
    }

    return rows;
}





const initGame = () => {
    return [squareRow(8),
    squareRow(7),
    squareRow(6),
    squareRow(5),
    squareRow(4),
    squareRow(3),
    squareRow(2),
    squareRow(1)];
}





export { initGame };