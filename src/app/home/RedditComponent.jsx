import React from 'react';
import shortid from 'shortid';

function RedditComponent(props) {

    if( props.showSpinner ) { return <p>Loading...</p> }
    return (
        <ul>
          {props.subredditData.map((data, index) => (
            <li key={shortid.generate()}>
              <a href={`https://reddit.com${data.url}`} target="_blank" rel="noopener noreferrer">{data.title}</a>
            </li>
          ))}
          <button onClick={() => props.fetchSubredditJson('reactjs')}>Show ReactJS subreddits</button>
        </ul>
    )
}

export default RedditComponent;