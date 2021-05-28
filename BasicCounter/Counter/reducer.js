import {Increase, Decrease} from './actionTypes';
const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Increase:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case Decrease:
      console.log(action.type);
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
