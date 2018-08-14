
import {switchOn} from 'atp-pointfree';

//Action type definitions
export const SET_PAGE_COUNT = 'basic/paginator/setCount';
export const SET_PAGE = 'basic/paginator/setPage';

//Action creators and selectors
export const paginator = {
    setPageCount: (name, count) => ({type: SET_PAGE_COUNT, name, count}),
    setPage: (name, page) => ({type: SET_PAGE, name, page}),
    get: (getState, name) => getPaginatorData(getState().basic.paginator, name)
}

const getPaginatorData = (state, name) => typeof state[name] !== 'undefined'
    ? state[name]
    : {page: 1, pages: 1};

//Reducer
export default (state = {}, action) => switchOn(action.type, {
    [SET_PAGE_COUNT]: () => ({
        ...state,
        [action.name]: {
            ...getPaginatorData(state, action.name),
            pages: action.count
        }
    }),
    [SET_PAGE]: () => ({
        ...state,
        [action.name]: {
            ...getPaginatorData(state, action.name),
            page: action.page
        }
    }),
    default: () => state,
});
