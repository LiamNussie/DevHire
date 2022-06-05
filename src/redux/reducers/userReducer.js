import { userActionTypes } from '../constants/userActionTypes';

const INIT_STATE = {
    favorites: []
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case userActionTypes.FAVORITE_UPDATED:
          return {
            ...state,
            favorites: state.favorites.concat(action.payload)
          };
        default: 
           return state;
    }
};

export default userReducer;