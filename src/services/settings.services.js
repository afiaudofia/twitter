import {
    settingsConstants
} from '../constants';

/**
 * @function getSettings
 * @description Get the settings from the localstorage
 * @returns {Object} An object containing the settings
 */

const storage = window.localStorage;

function getSettings(defaultSettings) {
    try {
        if (storage) {
            const value = storage.getItem(settingsConstants.SETTINGS_KEY) || defaultSettings;
            const settings = typeof value === 'string' ? JSON.parse(value) : value;
            return settings;
        }
        return defaultSettings;
    } catch (e) {
        return defaultSettings;
    }
}

/**
 * @function updateSettings
 * @description Update the user settings
 * @param {object} settings - The settings to update
 * @returns {Boolean} To denote status of action
 */
function updateSettings(settings) {
    if (storage) {
        storage.setItem(settingsConstants.SETTINGS_KEY, JSON.stringify(settings));
        return true;
    }
    return false;
}


export default {
    getSettings,
    updateSettings,
};
