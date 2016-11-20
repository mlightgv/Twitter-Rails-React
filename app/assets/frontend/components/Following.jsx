import React from 'react'
import FollowerStore from '../stores/FollowerStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: FollowerStore.getAll() };
};

export default class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllFollowers();
    FollowerStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    FollowerStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }
  unfollowUser(userId) {
    UserActions.unfollowUser(userId);
    UserActions.getAllFollowers();
  }

  render() {
    console.log(0, "Following");
    let users = this.state.users.map( user => {
      return (
        <li key={user.id} className="collection-item avatar">
          <img src={user.gravatar} className="circle" />
          <span className="title">{user.name}</span>
          <a className="secondary-content btn-floating green" onClick={this.unfollowUser.bind(this, user.id)}>
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      )
    });
    return (
      <div>
        <h3>Following</h3>
        <ul className="collection">
          {users}
        </ul>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
