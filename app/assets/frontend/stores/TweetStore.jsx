import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";
let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
  getAll() {
    return _tweets.map(tweet => {
       tweet.formattedDate = moment(tweet.created_at).fromNow();
       return tweet;
   });
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
      break;
    default:
      //no op
  }

});

export default TweetStore;
