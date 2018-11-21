import { settingsConstants } from '../constants';
import settingsServices from '../services/settings.services';

const updateSettings = settings => {
    return dispatch => {
        settingsServices.updateSettings(settings);
        dispatch({
            type: settingsConstants.UPDATE_SETTINGS,
            payload: settings
        });
    };
};

const changeToEditMode = () => {
    return dispatch => {
        dispatch({
            type: settingsConstants.CHANGE_TO_EDIT_MODE
        });
    };
};

export { updateSettings, changeToEditMode };
