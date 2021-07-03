import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { AddEditPlayerForm } from '../PlayerForms/AddEditPlayerForm';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header id="main-header" className="header">
      <div className="logo">
        <CloudColor className="logo__color" />
        <CloudEffects className="logo__effects" />
      </div>
      <h1 className="header__title">FWI Poker Challenge</h1>
      <div className="button">
        <div
          className="header-div-button"
          onClick={() => {
            ReactDOM.render(
              <AddEditPlayerForm dispatch={dispatch} />,
              document.querySelector('#root')
            );
          }}
        >
          Add Player
        </div>
      </div>
    </header>
  );
};

export default Header;
