import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
  const { count } = state.home;
  return { count }
};

const mapDispatchToProps = dispatch => {

  const onIncrementClick = () => { 
    console.log('hsdlfsjdlskjdf');
    dispatch(homeOperations.incrementCount(1))
  };
  const onDecrementClick = () => {
    console.log('sdfsdfsdfsdfsf');
    dispatch(homeOperations.decrementCount(1))
  };
  
  return {
    onIncrementClick,
    onDecrementClick
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;