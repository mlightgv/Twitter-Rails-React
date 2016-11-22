import React from 'react'
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import Follower from './Follower';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAll() };
};

export default class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    UserStore.setPage("Following");
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllFollowers();
    UserStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }

  render() {
    console.log(0, "Following");
    let users = this.state.users.map( user =>  <Follower  key={user.id} {...user} /> )
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
