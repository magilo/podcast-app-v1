import React, { Component } from 'react';

import { SearchBar, Results, SearchBy } from './index'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      results: ""
    }
    this.handleSearchSubmitCB = this.handleSearchSubmitCB.bind(this)
    this.handleTitleOrArtistCB = this.handleTitleOrArtistCB.bind(this)
  }

  handleSearchSubmitCB = (childData) => {
    console.log(childData);
  }

  handleTitleOrArtistCB = (childData) => {
    console.log('search TitleOrArtistCB', childData)
  }

  render() {
    return (
      <div>
        <div><SearchBy titleOrArtistCB={this.handleTitleOrArtistCB} /></div>
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
