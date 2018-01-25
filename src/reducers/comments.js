import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
    // same thing as writing return state.concat([action.payload]); takes the exisitng array and concats another array containing action.ppayload
    return [ ...state, action.payload ];
  }
  return state;
}