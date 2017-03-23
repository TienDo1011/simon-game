import * as types from './actionTypes';

export const playerClick = color => ({
  type: types.PLAYER_CLICK,
  color,
});

export const toggleOn = () => ({
  type: types.TOGGLE_ON,
});

export const toggleStrict = () => ({
  type: types.TOGGLE_STRICT,
});

export const simonClick = color => ({
  type: types.SIMON_CLICK,
  color,
});
