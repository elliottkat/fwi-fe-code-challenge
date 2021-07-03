import {
  ADD_PLAYER,
  DELETE_PLAYER,
  EDIT_PLAYER,
  FETCH_PLAYERS_SUCCESS,
} from './constants';

export function fetchPlayersSuccess(data) {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export function addPlayer(playerToAdd) {
  return { type: ADD_PLAYER, payload: { playerToAdd } };
}

export function editPlayer(playerToEdit) {
  return { type: EDIT_PLAYER, payload: { playerToEdit } };
}

export function deletePlayer(id) {
  return { type: DELETE_PLAYER, payload: { id } };
}
