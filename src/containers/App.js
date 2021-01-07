import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1 className='mid-gray pv-4'>Loading . . .</h1> :
      (
        <div>
          <div className='top shadow-5'>
            <h1 className='mid-gray'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
          </div>
          <div className='card-container'>
            <CardList robots={filteredRobots} />
          </div>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
