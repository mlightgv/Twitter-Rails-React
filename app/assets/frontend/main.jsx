import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  { id: 1, name: 'Mary Gomez', body: 'My first tweet' },
  { id: 2, name: 'Mary Gomez2', body: 'My second tweet' },
  { id: 3, name: 'Mary Gomez3', body: 'My third tweet' }
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets }
  }
  addTweet(tweetToAdd) {
     let newTweetsList = this.state.tweetsList;
     newTweetsList.unshift({ id: Date.now(), name: 'Guess', body: tweetToAdd });
     this.setState({ tweetsList: newTweetsList });
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
 ReactDOM.render(
   <Main />,
   document.getElementById('react')
 );
};

$(documentReady);
