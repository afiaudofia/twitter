import { tweetsConstants } from "../constants";
import tweetsServices from "../services/tweets.services";

/**
 * @function getTweets
 * @description Action for when sending a message to the bot
 * @param {string} screenName - owner of tweet we want to get
 * @param {number} count - Amount of tweet we want to get
 * @param {number} timeRange - Time range of tweet to get
 */
const getTweets = (tweetOrder, count, timeRange) => {
  return async dispatch => {
    const response = await tweetsServices.getTweets(
      tweetOrder.screenName,
      count,
      timeRange
    );
    // dispatch to append the bot's reply to the chat
    dispatch({
      type: tweetsConstants.GET_TWEETS,
      payload: { ...tweetOrder, tweets: response.data }
    });
  };
};

const reorderTweetPanels = (source, destination) => {
  return dispatch => {
    dispatch({
      type: tweetsConstants.ORDER_TWEET_PANELS,
      payload: { source, destination }
    });
  };
};

const setEmptyTweets = tweets => {
  tweets.map(tweetPanel => {
    tweetPanel.tweets = [];
  });

  return dispatch => {
    dispatch({
      type: tweetsConstants.SET_EMPTY_TWEETS,
      payload: tweets
    });
  };
};

export { getTweets, reorderTweetPanels, setEmptyTweets };
