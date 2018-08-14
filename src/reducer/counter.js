
import {merge, switchOn, remove} from "atp-pointfree";

//Action type definitions
export const COUNTER_RESET      = 'basic/counter/reset';
export const COUNTER_INCREMENT  = 'basic/counter/increment';
export const COUNTER_DECREMENT  = 'basic/counter/decrement';

//Action creators and selectors
export const input = {
    increment: (name, min = -9999999999999999, max = 9999999999999999) => ({type: COUNTER_INCREMENT, name, min, max}),
    decrement: (name, min = -9999999999999999, max = 9999999999999999) => ({type: COUNTER_DECREMENT, name, min, max}),
    reset: (name, value = 0) => ({type: COUNTER_RESET, name, value}),
    value: (getState, name) => getState().basic.counter[name] || 0
};

//Reducer
export default (state = {}, action) => switchOn(action.type, {
    [COUNTER_INCREMENT]: () => merge(state, {[action.name]: Math.min((state[action.name] || 0) + 1, action.max)}),
    [COUNTER_DECREMENT]: () => merge(state, {[action.name]: Math.max((state[action.name] || 0) - 1, action.min)}),
    [COUNTER_RESET]:     () => action.value ? merge(state, {[action.name]: action.value}) : remove(action.name)(state),
    default: () => state,
});
