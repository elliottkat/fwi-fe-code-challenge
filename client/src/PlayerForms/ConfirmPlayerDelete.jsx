import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerForms.scss';
import { deletePlayerRequest } from '../appState/thunks';

export class ConfirmPlayerDelete extends Component {
  constructor(props) {
    super(props);
    const { id, name } = props;
    this.state = {
      id,
      name,
    };
  }

  render() {
    const { id, name } = this.state;

    return (
      <div className="formContainer">
        <h2>Delete Player {name}?</h2>
        <div>
          <button
            className="playerFormButton"
            onClick={() => {
              this.props.dispatch(deletePlayerRequest({ id }));
              window.location.reload();
            }}
          >
            Delete
          </button>
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

ConfirmPlayerDelete.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
