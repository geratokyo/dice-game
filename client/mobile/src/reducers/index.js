import { combineReducers } from 'redux';
import routes from './routes';
import playersOnline from './players-online';
import ws from './ws';
import player from './player';
import game from './game';

export default combineReducers({
    routes,
    playersOnline,
    ws,
    player,
    game,
});
