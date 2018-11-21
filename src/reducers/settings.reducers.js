import { settingsConstants } from '../constants';
import settingsServices from '../services/settings.services';
import dateformat from 'dateformat';

const defaultSettings = {
    tweetCount: 30,
    // pallete: '#f5f5f5',
    pallete: {
        backgroundColor: '#fff',
        color: '#350'
    },
    timeRange: dateformat(new Date(), 'yyyy-mm-dd'),
    tweetOrder:[
        {screenName: 'ycombinator'},
        {screenName: 'newsycombinator'},
        {screenName: 'MakeSchool'},
    ],
    editMode: false,
};

const initial = settingsServices.getSettings(defaultSettings);

export default (state = initial, action) => {

    if (action.type === settingsConstants.GET_SETTINGS || action.type === settingsConstants.UPDATE_SETTINGS) {
        return action.payload;
    }

    if (action.type === settingsConstants.CHANGE_TO_EDIT_MODE) {
        return {...state, editMode: true };
    }

    return state;

};