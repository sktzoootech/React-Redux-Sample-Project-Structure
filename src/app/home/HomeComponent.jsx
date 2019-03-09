import React from 'react';
import RedditContainer from './RedditContainer';

function HomeComponent(props) {

  return (
    <div>
      <p>current count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
      <RedditContainer/>
    </div>
  )
}

export default HomeComponent;