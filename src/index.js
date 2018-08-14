
import {combineReducers} from "redux";

import toggleReducer, {toggle} from "./reducer/toggle";
import radioReducer, {radio} from "./reducer/radio";
import inputReducer, {input} from "./reducer/input";
import counterReducer, {counter} from "./reducer/counter";
import paginatorReducer, {paginator} from "./reducer/paginator";

export default combineReducers({
    paginator: paginatorReducer,
    toggle: toggleReducer,
    radio: radioReducer,
    input: inputReducer,
    counter: counterReducer
});

export {paginator, toggle, radio, input, counter};
