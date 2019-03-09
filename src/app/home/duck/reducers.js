import { Types as types } from './actions';

const INITIAL_STATE = {
  count: 0,
  subreddit: '',
  showSpinner: false,
  subredditData: []
}
const homeReducer = (state=INITIAL_STATE, action) => {

  switch(action.type) {
    
    case types.INCREMENT_COUNT: {
      const { value } = action;
      const { count } = state;
      return {
        ...state,
        count: count + value
      }
    }
    
    case types.DECREMENT_COUNT: {
      const { value } = action;
      const { count } = state;
      return {
        ...state,
        count: count - value
      }
    }
    
    case types.REQUEST_SUBREDDIT_JSON: {
      const { subreddit } = action;
      return {
        ...state,
        subreddit,
        subredditData: [],
        showSpinner: true
      }
    }
    
    case types.RECEIVE_SUBREDDIT_JSON: {
      const { subredditData } = action;
      return {
        ...state,
        subredditData,
        showSpinner: false
        
      }
    }
    
    default: return state;
  }
}

export default homeReducer;