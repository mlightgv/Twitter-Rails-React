import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import _ from 'lodash';

let _users = [];
let _followedIds = [];
class UserEventEmitter extends AppEventEmitter {
  getAll() {
      return _users.map( user => {
        user.following = _followedIds.indexOf(user.id) >= 0;
        return user;
      });
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _followedIds = []
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      console.log(4, "UserStore: RECEIVED_ONE_FOLLOWER");
      _followedIds.push(action.rawFollower.user_id);
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVED_FOLLOWERS:
      console.log(4, "UserStore: RECEIVED_FOLLOWERS");
      _users = action.rawFollowers;
      UserStore.emitChange();
      break;
    case ActionTypes.REMOVE_ONE_FOLLOWER:
      console.log(4, "UserStore: REMOVE_ONE_FOLLOWER");
      _.remove(_users, function(user) {
  			return action.userId === user.id;
  		});
      UserStore.emitChange();
      break;
    default:
      //no op
  }

});

export default UserStore;
