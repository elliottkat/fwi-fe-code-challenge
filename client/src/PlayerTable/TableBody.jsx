import React from 'react';
import PropTypes from 'prop-types';
import Flags from 'react-world-flags';

import { useDispatch } from 'react-redux';

import { deletePlayerSuccess } from '../appState/actions';

import Avatar from '../Avatar';
import { COUNTRIES } from '../constants';

const TableBody = ({ players }) => {
  const dispatch = useDispatch();

  return (
    <table
      id="player-table-body"
      role="presentation"
      className="table table--body"
    >
      <tbody>
        {players.map(({ id, name, country, winnings, imageUrl }) => (
          <tr key={id} role="row" className="table__row">
            <td role="gridcell" className="table__avatar">
              <Avatar src={imageUrl} />
            </td>
            <td role="gridcell" className="table__player">
              {name}
            </td>
            <td role="gridcell" className="table__winnings">
              {winnings.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </td>
            <td role="gridcell" className="table__native">
              <div className="country">
                <Avatar>
                  <Flags code={country} alt="" />
                </Avatar>
                {country}
              </div>
            </td>
            <td>
              <button
                onClick={() =>
                  dispatch(
                    deletePlayerSuccess({
                      id,
                      name,
                      country,
                      winnings,
                      imageUrl,
                    })
                  )
                }
              >
                Delete User
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableBody.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.oneOf(Object.keys(COUNTRIES)),
      winnings: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableBody;
