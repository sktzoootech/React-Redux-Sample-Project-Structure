// operations.js
import fetch from 'cross-fetch';
import { Creators } from './actions';

const incrementCount = Creators.incrementCount;
const decrementCount = Creators.decrementCount;
const requestSubredditJsonAction = Creators.requestSubredditJson;
const receiveSubredditJsonAction = Creators.receiveSubredditJson;

// 'fetchSubredditJson()' will fetch the JSON data from the subreddit,
// extract the required information and update the Redux store with it.
const fetchSubredditJson = (subreddit) => {
  return dispatch => {
    // Dispatching this action will toggle the 'showRedditSpinner'
    // flag in the store, so that the UI can show a loading icon.
    dispatch(requestSubredditJsonAction(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => {
        const responseData = json;
        let data = [];
      
        responseData.data.children.map(child => {
          const childData = {
            title: child.data.title,
            url: child.data.permalink
          };
          
          data.push(childData);
          return null;
        });

      // Dispatching this action while passing the 'data' array 
      // we created above will update the store with this data.
      // It is good practice to send only the required information
      // rather than trimming the data when and where it is used.
      // This is why we aren't sending the entire JSON response to 
      // the Redux store.
      dispatch(receiveSubredditJsonAction(data))
      });
  }
};

export default {
  incrementCount,
  decrementCount,
  fetchSubredditJson
}