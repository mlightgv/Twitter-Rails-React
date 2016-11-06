import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets");
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet) )
    .error(error => console.log(error));
  },
  getAllUsers() {
    $.get("/followers")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
    .error(error => console.log(error));
  },
  followUser(userId) {
    console.log(2, "API.followUser");
    $.post("/followers", { user_id: userId })
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower) )
    .error(error => console.log(error));
  }
}