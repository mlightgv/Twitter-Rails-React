import React from 'react'
import { Link } from 'react-router'
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import Following from './Following';
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
      <div className="row">
        <div className="col s4">
          <Following />
        </div>
        <div className="col s8">
          <div className="container">
            <TweetBox />
            <TweetList tweets={this.state.tweetsList} />
          </div>
        </div>
      </div>
    );
  }
}
