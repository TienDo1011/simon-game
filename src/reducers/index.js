import * as types from '../actions/actionTypes';

const initialState = {
  currentSeries: [],
  playerSeries: [],
  isOn: false,
  strict: false,
  player: false,
  lost: false,
};

export default function simon(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_ON:
      return {
        ...initialState,
        isOn: !state.isOn,
      };
    case types.TOGGLE_STRICT:
      return {
        ...state,
        isOn: !state.strict,
      };
    case types.SIMON_CLICK:
      return {
        ...state,
        currentSeries: [...state.currentSeries, action.color],
        player: true,
      };
    case types.PLAYER_CLICK:
      if (state.strict && state.currentSeries[state.playerSeries.length] !== action.color) {
        return {
          ...state,
          currentSeries: [],
          playerSeries: [],
          lost: true,
        };
      } else if (!state.strict && state.currentSeries[state.playerSeries.length] !== action.color) {
        return {
          ...state,
          playerSeries: [],
          lost: true,
        };
      }
      return {
        ...state,
        playerSeries: [...state.playerSeries, action.color],
      };
    default:
      return state;
  }
}
