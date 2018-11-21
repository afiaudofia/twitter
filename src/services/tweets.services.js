import axios from './axios';

/**
 * @function getTweets
 * @description Get all the sessions with their last messages
 * @param {string} screenName - Get the tweet belonging to
 * @param {number} count - The amount of tweet to get
 * @param {number} timeRange - The time range of tweet
 * @returns {Promise<Object[]>} A promise of array of object containing the tweets
 */
function getTweets(screenName, count, timeRange) {
    return axios.get(`1.1/statuses/user_timeline.json?count=${count}&screen_name=${screenName}&until=${timeRange}`);
}

export default {
    getTweets
};