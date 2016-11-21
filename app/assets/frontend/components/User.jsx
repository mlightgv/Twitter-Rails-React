import React from 'react'
import UserActions from '../actions/UserActions';

export default class User extends React.Component {
  followUser(userId) {
    UserActions.followUser(userId);
  }
  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey")
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
