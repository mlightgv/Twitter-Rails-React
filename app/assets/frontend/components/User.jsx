import React from 'react'
import UserActions from '../actions/UserActions';

export default class User extends React.Component {
  followButton(){
    
  }
  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey")
  }
  followUser(userId) {
    UserActions.followUser(userId);
  }
  unfollowUser(userId) {
    UserActions.unfollowUser(userId);
  }

  render() {
    return (
      <li key={this.props.id} className="collection-item avatar">
        <img src={this.props.gravatar} className="circle" />
        <span className="title">{this.props.name}</span>
        <a className={this.followClasses(this.props.following)} onClick={this.followUser.bind(this, this.props.id)}>
          <i className="material-icons">person_pin</i>
        </a>
      </li>
    );
  }
}
