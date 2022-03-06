import React, { Component } from 'react';
import axios from 'axios';

//results component should pass back the selected podcast (to display)
//can also add to playlist
class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: this.props.searchResults
    }
    this.handleResultSubmit = this.handleResultSubmit.bind(this)
  }


  handleResultSubmit(podcastData, event) {
    event.preventDefault()
    this.props.resultSubmitCB(podcastData)
  }

  render() {
    console.log('inside result', this.props.searchResults)
    const { searchResults } = this.props
    if (searchResults.length > 0) {

      const listItems = searchResults.map((res) =>
        <div key={res.id}>
          {res.title} ---
          <button
            value={res.title}
            // disabled={movieExists(res.imdbID, nominees)}
            onClick={this.handleResultSubmit.bind(this, res)}
          >
            +
          </button>
        </div>
      );
      return (
        <div>
          <h4>showing results</h4>
          <div id="results-list">{listItems}</div>
        </div>
      );

    } else {
      return (
        <div>
          <h4>enter title/artist in search</h4>
        </div>
      )

    }
  }
}

export default Results;
