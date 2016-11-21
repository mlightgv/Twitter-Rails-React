import React from 'react'
import UserActions from '../actions/UserActions';

export default class Follower extends React.Component {
  unfollowUser(userId) {
    UserActions.unfollowUser(userId);
  }

  render() {
    return (
      <li key={this.props.id} className="collection-item avatar">
        <img src={this.props.gravatar} className="circle" />
        <span className="title">{this.props.name}</span>
        <a className="secondary-content btn-floating green" onClick={this.unfollowUser.bind(this, this.props.id)}>
          <i className="material-icons">person_pin</i>
        </a>
      </li>
    );
  }
}
