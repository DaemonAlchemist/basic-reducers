
import {o} from "atp-sugar";

//Action type definitions
export const TOGGLE_SHOW = 'basic/toggle/show';
export const TOGGLE_HIDE = 'basic/toggle/hide';
export const TOGGLE_TOGGLE = 'basic/toggle/toggle';

//Action creators and selectors
export const toggle = {
    show: name => ({type: TOGGLE_SHOW, name}),
    hide: name => ({type: TOGGLE_HIDE, name}),
    toggle: (name, defaultState = false) => ({type: TOGGLE_TOGGLE, name, defaultState}),
    isVisible: (getState, name, defaultState = false) => isVisible(getState().basic.toggle, name, defaultState)
}

const isVisible = (state, name, defaultState = false) => typeof state[name] !== 'undefined'
    ? state[name]
    : defaultState;

//Reducer
export default (state = {}, action) => o(action.type).switch({
    [TOGGLE_SHOW]: () => o(state).merge({[action.name]: true}).raw,
    [TOGGLE_HIDE]: () => o(state).merge({[action.name]: false}).raw,
    [TOGGLE_TOGGLE]: () => o(state).merge({[action.name]: !isVisible(state, action.name, action.defaultState)}).raw,
    default: () => state,
});
