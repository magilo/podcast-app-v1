import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userReqParams: "",
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSearchSubmit(event) {
    this.props.searchSubmitCB(this.state.userReqParams)
    event.preventDefault()
    this.setState({
      userReqParams: ""
    })
  }

  render() {
    return (
      <div >
        <form
          className="search-bar"
          onSubmit={this.handleSearchSubmit}>

          <input
            className="search-bar"
            name="userReqParams"
            type="text"
            value={this.state.userReqParams}
            placeholder="e.g. This American Life"
            onChange={this.handleChange}
          />
          <button
            className="search-bar"
            type="submit"
            onSubmit={this.handleSearchSubmit}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> */}
            🔍
          </button>

        </form>
      </div>
    )
  }
}

export default Search;
