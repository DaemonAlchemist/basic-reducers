
import {combineReducers} from "redux";

import toggleReducer, {toggle} from "./reducer/toggle";
import radioReducer, {radio} from "./reducer/radio";
import inputReducer, {input} from "./reducer/input";
import counterReducer, {counter} from "./reducer/counter";
import paginatorReducer, {paginator} from "./reducer/paginator";
import setReducer, {set} from "./reducer/set";

export default combineReducers({
    paginator: paginatorReducer,
    toggle: toggleReducer,
    radio: radioReducer,
    input: inputReducer,
    counter: counterReducer,
    set: setReducer
});

export {paginator, toggle, radio, input, counter, set};
