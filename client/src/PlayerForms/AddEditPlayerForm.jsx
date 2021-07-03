import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './PlayerForms.scss';
import { addPlayerRequest, editPlayerRequest } from '../appState/thunks';

export class AddEditPlayerForm extends Component {
  constructor(props) {
    super(props);
    this._setName = this._setName.bind(this);
    this._setWinnings = this._setWinnings.bind(this);
    this._setCountry = this._setCountry.bind(this);
    this._checkValues = this._checkValues.bind(this);

    // if an id is passed in with props, this is a player edit.
    // Either get the edited player's data or set it to the empty string.
    const edit = !!this.props.player;
    const id = _.get(this.props.player, 'id', '');
    const name = _.get(this.props.player, 'name', '');
    const winnings = _.get(this.props.player, 'winnings', '');
    const country = _.get(this.props.player, 'country', '');

    this.state = {
      id,
      edit,
      name,
      winnings,
      country,
      patchedItems: [],
    };
  }

  _setName(event) {
    const name = event.target.value;
    const { patchedItems } = this.state;
    patchedItems.push('name');
    this.setState({ name, patchedItems });
  }

  _setWinnings(event) {
    const winnings = parseInt(event.target.value) || '';
    const { patchedItems } = this.state;
    patchedItems.push('winnings');
    this.setState({ winnings, patchedItems });
  }

  _setCountry(event) {
    const country = event.target.value;
    const { patchedItems } = this.state;
    patchedItems.push('country');
    this.setState({ country, patchedItems });
  }

  _checkValues() {
    return !(
      this.state.name === '' ||
      this.state.winnings === '' ||
      this.state.country === ''
    );
  }

  render() {
    const { edit, id, name, winnings, country, patchedItems } = this.state;

    const action = edit ? 'Edit' : 'Add';

    const buttonContents = edit ? (
      <button
        className="playerFormButton"
        disabled={!this._checkValues()}
        onClick={() => {
          this.props.dispatch(
            editPlayerRequest({
              id,
              player: {
                name,
                winnings,
                country,
              },
              patchedItems,
            })
          );
          window.location.reload();
        }}
      >
        {action}
      </button>
    ) : (
      <button
        className="playerFormButton"
        disabled={!this._checkValues()}
        onClick={() => {
          this.props.dispatch(
            addPlayerRequest({
              name,
              winnings,
              country,
            })
          );
          window.location.reload();
        }}
      >
        {action}
      </button>
    );

    return (
      <div className="formContainer">
        <div role="row">
          <h2>{action} Player</h2>
        </div>
        <p />
        <div>
          <label className="playerFormLabel">Name</label>
          <input
            className="playerFormInput"
            type="text"
            value={name}
            onChange={(event) => this._setName(event)}
          />
        </div>
        <p />
        <div>
          <label className="playerFormLabel">Winnings</label>
          <input
            className="playerFormInput"
            type="text"
            value={winnings}
            onChange={(event) => this._setWinnings(event)}
          />
        </div>
        <p />
        <div>
          <label className="playerFormLabel">Country</label>
          <input
            className="playerFormInput"
            type="text"
            value={country}
            onChange={(event) => this._setCountry(event)}
          />
        </div>
        <p />
        <div>
          {buttonContents}
          <button
            className="playerFormButton"
            onClick={() => {
              window.location.reload();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

AddEditPlayerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  player: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    winnings: PropTypes.number,
    country: PropTypes.string,
  }),
};
