
import {merge, switchOn, remove} from "atp-pointfree";

//Action type definitions
export const RADIO_SET    = 'basic/radio/set';
export const RADIO_CLEAR  = 'basic/radio/clear';
export const RADIO_TOGGLE = 'basic/radio/toggle';

//Action creators and selectors
export const radio = {
    set: (name, value) => ({type: RADIO_SET, name, value}),
    clear: name => ({type: RADIO_CLEAR, name}),
    toggle: (name, value) => ({type: RADIO_TOGGLE, name, value}),
    value: (getState, name) => getState().basic.radio[name] || null
};

//Reducer
export default (state = {}, action) => switchOn(action.type, {
    [RADIO_SET]:    () => merge(state, {[action.name]: action.value}),
    [RADIO_CLEAR]:  () => remove(action.name)(state),
    [RADIO_TOGGLE]: () => state[action.name] === action.value
            ? remove(action.name)(state)
            : merge(state, {[action.name]: action.value}),
    default: () => state,
});
