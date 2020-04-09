import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (query) => {
      dispatch(handleVideoSearch(query));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

var SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
