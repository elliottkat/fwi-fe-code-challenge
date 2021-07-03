import { addPlayer, deletePlayer, editPlayer } from './actions';

export const addPlayerRequest = ({ name, winnings, country }) => async (
  dispatch
) => {
  const player = {
    name,
    winnings,
    country,
  };
  try {
    await fetch('http://localhost:3001/players/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(player),
    });
    dispatch(addPlayer(player));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const editPlayerRequest = ({ id, player, patchedItems }) => async (
  dispatch
) => {
  const patchBody = {};
  patchedItems.forEach((item) => {
    patchBody[item] = player[item];
  });

  const body = JSON.stringify(patchBody);

  try {
    await fetch(`http://localhost:3001/players/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body,
    });
    dispatch(editPlayer(player));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const deletePlayerRequest = ({ id }) => async (dispatch) => {
  const uri = `http://localhost:3001/players/${id}`;
  try {
    await fetch(uri, {
      headers: {
        Accept: 'application/json',
      },
      method: 'DELETE',
    });
    dispatch(deletePlayer(id));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
