import React from 'react'
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import User from './User';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAll() };
};

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    UserStore.setPage("Follow");
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }

  render() {
    console.log(0, "Follow");
    let users = this.state.users.map( user =>  <User  key={user.id} {...user} /> )
    return (
      <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
          <h5>Who to follow</h5>
          <ul className="collection">
            {users}
          </ul>
          <Link to="/">Back</Link>
        </div>
        <div className="col s2"></div>
      </div>
    );
  }
}
