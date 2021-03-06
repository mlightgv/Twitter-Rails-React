import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions.receivedTweets");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    });
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    });
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    });
  },
  receivedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower
    });
  },
  receivedFollowers(rawFollowers) {
    console.log(3, "ServerActions.receivedFollowers");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_FOLLOWERS,
      rawFollowers
    });
  },
  removeOneFollower(userId) {
    console.log(3, "ServerActions.removeOneFollower");
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_ONE_FOLLOWER,
      userId
    });
  }
}
