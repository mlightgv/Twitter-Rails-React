import API from "../API"

export default {
  getAllUsers() {
    API.getAllUsers();
  },
  followUser(userId) {
    console.log(1, "User Actions: followUser");
    API.followUser(userId);
  }
}
