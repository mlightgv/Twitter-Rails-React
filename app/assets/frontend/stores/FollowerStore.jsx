import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";
import _ from 'lodash';

let _followers = [];
class FollowerEventEmitter extends AppEventEmitter {
  getAll() {
      return _followers;
  }
}

let FollowerStore = new FollowerEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_FOLLOWERS:
      console.log(4, "FollowerStore: RECEIVED_FOLLOWERS");
      _followers = action.rawFollowers;
      FollowerStore.emitChange();
      break;
    case ActionTypes.REMOVE_ONE_FOLLOWER:
      console.log(4, "FollowerStore: REMOVE_ONE_FOLLOWER");
      _.remove(_followers, function(follower) {
				return action.userId === follower.id;
			});
      FollowerStore.emitChange();
      break;
    default:
      //no op
  }

});

export default FollowerStore;
