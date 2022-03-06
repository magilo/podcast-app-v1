import React, { Component } from 'react';

import { SearchBar, Results } from './index'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      results: ""
    }
    this.handleSearchSubmitCB = this.handleSearchSubmitCB.bind(this)
  }

  handleSearchSubmitCB = (childData) => {
    console.log(childData);
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar searchSubmitCB={this.handleSearchSubmitCB} />
        </div>
        <div className="results">
          <Results />
        </div>
      </div>
    )

  }
}

export default Search;
