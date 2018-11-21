import { combineReducers } from 'redux';

import tweets from "./tweets.reducers";
import settings from "./settings.reducers";

const reducers = combineReducers({
    tweets,
    settings,
});

export default reducers;