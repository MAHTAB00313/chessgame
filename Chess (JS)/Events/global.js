import { rootDiv } from "../Helper/const.js";
import { globalState } from "../index.js";



const whitePawnCLicked = () => {
    console.log("white pawn is clicked");
}









const globalEvent = () => {
    rootDiv.addEventListener("click", (e) => {

        if (e.target.localName === "img") {
            const clickedId = e.target.parentNode.id;
            const flatArr = globalState.flat();
            const sqr = flatArr.find(el => el.id == clickedId);
            const compName = sqr.piece.pName;


            if(compName==="whitePawn") {
                whitePawnCLicked();
            }
        }
    })
}

export { globalEvent };