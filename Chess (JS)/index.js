import { initGame } from './Data/data.js';
import { initGameRender } from './Render/main.js';
import { globalEvent } from './Events/global.js';

const globalState = initGame();

initGameRender(globalState);

globalEvent();


export {globalState}


