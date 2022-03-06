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
    // console.log("search bar", childData, this.state.searchByParams);
    this.setState({ userReqParams: childData })
    try {
      // "api/samplelist/search?title=bleh"
      const { data } = await axios.get(`api/samplelist/search?${this.state.searchByParams}=${childData}`)
      this.setState({ results: data })
      // console.log('search', this.state);
    } catch (err) {
      console.log(err)
    }
  }

  handleTitleOrNameCB = (childData) => {
    // console.log('search TitleOrNameCB', childData)
    this.setState({ searchByParams: childData })
  }

  handleResultSubmitCB = (childData) => {
    //display podcast to user
    // console.log('result submit', childData)
    //pass to top level
    this.props.viewDetailsCB(childData)
  }

  handleResultAddPodcastCB = (childData) => {
    //pass to top level
    console.log('resultadd', childData)
    this.props.addPodcastCB(childData)
  }


  render() {
    const { results } = this.state
    // console.log('this.state', this.state);
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
            resultSubmitCB={this.handleResultSubmitCB}
            resultAddPodcastCB={this.handleResultAddPodcastCB}
          />
        </div>
      </div>
    )

  }
}

export default Search;
