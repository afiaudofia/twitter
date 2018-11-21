import { tweetsConstants } from '../constants';

const initial = {
    tweets: []
};

export default (state = initial, action) => {

    if (action.type === tweetsConstants.GET_TWEETS) {
        const tweetIndex = state.tweets.findIndex(tweetPanel =>
            tweetPanel.screenName === action.payload.screenName
        );
        state.tweets[tweetIndex] = action.payload;
        return {...state, tweets: state.tweets };
    }

    if (action.type === tweetsConstants.SET_EMPTY_TWEETS) {
        return {...state, tweets: action.payload };
    }

    if(action.type === tweetsConstants.ORDER_TWEET_PANELS){
        const {source, destination} = action.payload;
        if(source !== destination){
            const tweets = Array.from(state.tweets);
            const [removed] = tweets.splice(source, 1);
            tweets.splice(destination, 0, removed);
            return {...state, tweets };
        }
    }

    return state;

};