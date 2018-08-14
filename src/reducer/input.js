
import {merge, switchOn, remove} from "atp-pointfree";

//Action type definitions
export const INPUT_SET    = 'basic/input/set';
export const INPUT_CLEAR  = 'basic/input/clear';

//Action creators and selectors
export const input = {
    set: (name, value) => ({type: value ? INPUT_SET : INPUT_CLEAR, name, value}),
    clear: name => ({type: INPUT_CLEAR, name}),
    value: (getState, name) => getState().basic.input[name] || null
};

//Reducer
export default (state = {}, action) => switchOn(action.type, {
    [INPUT_SET]:    () => merge(state, {[action.name]: action.value}),
    [INPUT_CLEAR]:  () => remove(action.name)(state),
    default: () => state,
});
