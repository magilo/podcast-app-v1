import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar, Results, SearchBy } from './index'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchByParams: "",
      userReqParams: "",
      results: []
    }
    this.handleSearchSubmitCB = this.handleSearchSubmitCB.bind(this)
    this.handleTitleOrNameCB = this.handleTitleOrNameCB.bind(this)
    this.handleResultSubmitCB = this.handleResultSubmitCB.bind(this)
    this.handleResultAddPodcastCB = this.handleResultAddPodcastCB.bind(this)
  }

  handleSearchSubmitCB = async (childData) => {
    try {
      const { data } = await axios.get(`api/podcasts/search?${this.state.searchByParams}=${childData}`)
      this.setState({ userReqParams: childData, results: data })
    } catch (err) {
      console.log(err)
    }
  }

  handleTitleOrNameCB = (childData) => {
    this.setState({ searchByParams: childData })
  }

  handleResultSubmitCB = (childData) => {
    //pass data from Results to top level Podcasts
    this.props.viewDetailsCB(childData)
  }

  handleResultAddPodcastCB = (childData) => {
    //pass data from Results to top level Podcasts
    this.props.addPodcastCB(childData)
  }


  render() {
    const { results, userReqParams } = this.state
    return (
      <div>
        <div><SearchBy titleOrNameCB={this.handleTitleOrNameCB} /></div>
        <div className="search-bar">
          <SearchBar
            searchSubmitCB={this.handleSearchSubmitCB} />
        </div>
        <div className="results">
          <Results
            searchResults={results}
            userReqParams={userReqParams}
            resultSubmitCB={this.handleResultSubmitCB}
            resultAddPodcastCB={this.handleResultAddPodcastCB}
          />
        </div>
      </div>
    )

  }
}

export default Search;
