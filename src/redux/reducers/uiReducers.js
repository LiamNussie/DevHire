import { uiActionTypes } from '../constants/uiActionTypes';

const INIT_STATE = {
    navDrawer: true
}

const uiReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case uiActionTypes.NAVDRAWER_OPEN:
          return {
             ...state,
             navDrawer: true
          }
      case uiActionTypes.NAVDRAWER_CLOSE:
          return {
              ...state,
              navDrawer: false
          }
    default:
        return state;
  }
}
export default uiReducer;