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
    this.handleResultAddPodcast = this.handleResultAddPodcast.bind(this)
  }


  handleResultSubmit(podcastData, event) {
    event.preventDefault()
    //pass data to Search component
    this.props.resultSubmitCB(podcastData)
  }

  handleResultAddPodcast(podcastData, event) {
    event.preventDefault()
    //pass data to Search component
    this.props.resultAddPodcastCB(podcastData)
  }

  render() {
    const { searchResults } = this.props
    if (searchResults.length > 0) {

      const listItems = searchResults.map((res) =>
        <div key={res.title}>
          <div>{res.title}</div>
          <div>*** {res.name} *** </div>
          <div id="result-element">
            -----------
            <button
              value={res.title}
              onClick={this.handleResultSubmit.bind(this, res)}
            >
              <span id="info-icon">🛈</span>
            </button>
            ---
            <button
              value={res.title}
              onClick={this.handleResultAddPodcast.bind(this, res)}
            >
              <span id="add-icon">+</span>
            </button>
            -----------
          </div>
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
          <h4>enter title/author in search</h4>
        </div>
      )

    }
  }
}

export default Results;
