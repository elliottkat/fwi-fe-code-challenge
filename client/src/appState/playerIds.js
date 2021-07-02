import { DELETE_PLAYER_SUCCESS, FETCH_PLAYERS_SUCCESS } from './constants';

export default function playerIds(state = [], action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return action.payload.data.players.map((player) => player.id);
    case DELETE_PLAYER_SUCCESS:
      const { data } = payload;
      const returnPlayers = state.filter((player) => player.id !== data.id);
      console.log(returnPlayers);
      return state.filter((player) => player.id !== data.id);
    default:
      return state;
  }
}
