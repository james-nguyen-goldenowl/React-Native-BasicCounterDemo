import {Increase, Decrease} from './actionTypes';
const add = value => {
  return {
    type: Increase,
    payload: value,
  };
};
const sub = value => {
  return {
    type: Decrease,
    payload: value,
  };
};
export {add, sub};
