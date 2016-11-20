import React from 'react'
import { Link } from 'react-router'
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(0, "Main._onChange");
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <div className="collection">
          <div className="collection-item"><Link to="/follow">Who to follow</Link></div>
          <div className="collection-item"><Link to="/following">Following</Link></div>
        </div>
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
