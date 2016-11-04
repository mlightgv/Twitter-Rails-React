import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  { id: 1, name: 'Mary Gomez', body: 'My first tweet' },
  { id: 2, name: 'Mary Gomez2', body: 'My second tweet' },
  { id: 3, name: 'Mary Gomez3', body: 'My third tweet' }
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets} />
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
