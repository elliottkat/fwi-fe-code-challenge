import {
  ADD_PLAYER,
  DELETE_PLAYER,
  EDIT_PLAYER,
  FETCH_PLAYERS_SUCCESS,
} from './constants';

function mergePlayers(state, { players }) {
  const newState = { ...state };
  players.forEach((player) => {
    newState[player.id] = player;
  });
  return newState;
}

export default function players(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return mergePlayers(state, action.payload.data);
    case ADD_PLAYER:
      const { playerToAdd } = payload;
      const addPlayerState = state;
      addPlayerState[playerToAdd.id] = playerToAdd;
      return addPlayerState;
    case EDIT_PLAYER:
      const { playerToEdit } = payload;
      const editPlayerState = state;
      editPlayerState[playerToEdit.id] = playerToEdit;
      return editPlayerState;
    case DELETE_PLAYER:
      const { id } = payload;
      const deletePlayerState = state;
      delete deletePlayerState[id];
      return deletePlayerState;
    default:
      return state;
  }
}
