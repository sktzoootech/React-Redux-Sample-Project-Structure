import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  incrementCount: ['value'],
  decrementCount: ['value'],
  requestSubredditJson: ['subreddit'],
  receiveSubredditJson: ['subredditData']
});

export { Types, Creators };