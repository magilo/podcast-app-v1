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
    this.handleTitleOrArtistCB = this.handleTitleOrArtistCB.bind(this)
    this.handleResultSubmitCB = this.handleResultSubmitCB.bind(this)

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

  handleTitleOrArtistCB = (childData) => {
    // console.log('search TitleOrArtistCB', childData)
    this.setState({ searchByParams: childData })
  }

  handleResultSubmitCB = (childData) => {
    //display podcast to user
    // console.log('result submit', childData)
    //pass to top level
    this.props.viewDetailsCB(childData)
  }

  // async componentDidMount() {
  //   const res = await axios.get("api/samplelist/search?title=bleh")
  //   console.log(res);
  // }

  render() {
    const { results } = this.state
    // console.log('this.state', this.state);
    return (
      <div>
        <div><SearchBy titleOrArtistCB={this.handleTitleOrArtistCB} /></div>
        <div className="search-bar">
          <SearchBar
            searchSubmitCB={this.handleSearchSubmitCB} />
        </div>
        <div className="results">
          <Results
            searchResults={results}
            resultSubmitCB={this.handleResultSubmitCB}
          />
        </div>
      </div>
    )

  }
}

export default Search;
