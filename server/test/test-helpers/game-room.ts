import GameState from '../../src/game-state';
import { default as GameRoom, GameRoomOptions } from '../../src/game-room';


export const createGameRoomOptions = (maxPlayers: number): GameRoomOptions => {
    return {
        maxPlayers,
        defaultState: 'start',
        stateFactory: (gameRoom: GameRoom) => ({
            'start': new GameState(gameRoom)
        })
    }
};
