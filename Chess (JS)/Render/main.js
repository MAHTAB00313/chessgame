
import * as pieceFun from "../Data/pieces.js"
import { rootDiv } from "../Helper/const.js";






const initGameRender = (data) => {

    data.forEach((element) => {

        const rowEl = document.createElement("div");

        element.forEach((sqr) => {
            const sqrDiv = document.createElement("div");
            sqrDiv.classList.add(sqr.color, "sqr");
            sqrDiv.id = sqr.id;

            rowEl.appendChild(sqrDiv);

            // render black pawn
            if (sqr.id[1] == 7) {
                sqr.piece = pieceFun.blackPawn(sqr.id);
            }
            // render black rook
            if (sqr.id == "a8" || sqr.id == "h8") {
                sqr.piece = pieceFun.blackRook(sqr.id);
            }
            // render black knight
            if (sqr.id == "b8" || sqr.id == "g8") {
                sqr.piece = pieceFun.blackKnight(sqr.id);
            }
            // render black bishop
            if (sqr.id == "c8" || sqr.id == "f8") {
                sqr.piece = pieceFun.blackBishop(sqr.id);
            }
            // render black queen
            if (sqr.id == "d8") {
                sqr.piece = pieceFun.blackQueen(sqr.id);
            }
            // render black king
            if (sqr.id == "e8") {
                sqr.piece = pieceFun.blackKing(sqr.id);
            }

            // render white pawn
            if (sqr.id[1] == 2) {
                sqr.piece = pieceFun.whitePawn(sqr.id);
            }
            // render white rook
            if (sqr.id == "a1" || sqr.id == "h1") {
                sqr.piece = pieceFun.whiteRook(sqr.id);
            }
            // render black knight
            if (sqr.id == "b1" || sqr.id == "g1") {
                sqr.piece = pieceFun.whiteKnight(sqr.id);
            }
            // render black bishop
            if (sqr.id == "c1" || sqr.id == "f1") {
                sqr.piece = pieceFun.whiteBishop(sqr.id);
            }
            // render black queen
            if (sqr.id == "d1") {
                sqr.piece = pieceFun.whiteQueen(sqr.id);
            }
            // render black king
            if (sqr.id == "e1") {
                sqr.piece = pieceFun.whiteKing(sqr.id);
            }

        });


        rowEl.classList.add("sqrRow")
        rootDiv.appendChild(rowEl)

    });

    pieceRender(data);
}


const pieceRender = (data) => {
    data.forEach(row => {

        row.forEach(sqr => {

            if (sqr.piece) {
                const sqrEl = document.getElementById(sqr.id);
                const pawnPiece = document.createElement("img");
                pawnPiece.src = sqr.piece.img;
                sqrEl.appendChild(pawnPiece)
            }
        });
    });

}



export { initGameRender };