import API from "../API"

export default {
  getAllUsers() {
    API.getAllUsers();
  },
  followUser(userId) {
    console.log(1, "User Actions: followUser");
    API.followUser(userId);
  },
  getAllFollowers() {
    console.log(1, "User Actions: getAllFollowers");
    API.getAllFollowers();
  },
  unfollowUser(userId) {
    console.log(1, "User Actions: unfollowUser");
    API.unfollowUser(userId);
  }
}
