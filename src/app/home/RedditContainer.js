import { connect } from 'react-redux';
import RedditComponent from './RedditComponent';

import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    const { subredditData, showSpinner } = state.home;
    console.log(state.home);
    return {
      subredditData,
      showSpinner
    }
};


const mapDispatchToProps = (dispatch) => {
    const fetchSubredditJson = (subreddit) => {
        dispatch(homeOperations.fetchSubredditJson(subreddit))
    };
    
    return { fetchSubredditJson };
};

const RedditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RedditComponent);

export default RedditContainer;