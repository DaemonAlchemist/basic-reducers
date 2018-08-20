
import {merge, switchOn, remove} from "atp-pointfree";

//Action type definitions
export const SET_ADD    = 'basic/set/add';
export const SET_REMOVE = 'basic/set/remove';
export const SET_CLEAR  = 'basic/set/clear';

const emptySet = new Set();

//Action creators and selectors
export const set = {
    add: (name, value) => ({type: SET_ADD, name, value}),
    remove: (name, value) => ({type: SET_REMOVE, name, value}),
    clear: name => ({type: SET_CLEAR, name}),
    values: (getState, name) => getState().basic.set[name] || emptySet
};

//Reducer
//TODO:  Something broken here if something is already in the set
export default (state = {}, action) => switchOn(action.type, {
    [SET_ADD]:    () => merge(state, {[action.name]: new Set(state[action.name] ? [...state[action.name].values()] : []).add(action.value)}),
    [SET_REMOVE]: () => merge(state, {[action.name]: (() => {
        const newSet = state[action.name] ? new Set([...state[action.name].values()]) : emptySet;
        newSet.delete(action.value);
        return newSet;
    })()}),
    [SET_CLEAR]:  () => remove(action.name)(state),
    default: () => state,
});
