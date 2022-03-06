import React, { Component } from 'react';
import { Search, PodcastView, Playlist } from './index'

/*** top level component ***/
class Podcasts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastDetails: {}
    }
    this.handleViewDetailsCB = this.handleViewDetailsCB.bind(this)
  }

  handleViewDetailsCB = (childData) => {
    //display podcast to user
    console.log('viewDetailsCB', childData)
    this.setState({ podcastDetails: childData }, function () {

      console.log("handleView", this.state.podcastDetails)
    })
  }

  render() {
    const { podcastDetails } = this.state
    return (
      <div className="App-body">
        <div className="App-search">
          <Search
            viewDetailsCB={this.handleViewDetailsCB} />
        </div>

        <div className="App-podcast-view">
          <PodcastView
            podcastDetails={podcastDetails} />
        </div>

        <div className="App-playlist">
          <h5> playlist </h5>
          <Playlist />
        </div>
      </div>
    )
  }
}

export default Podcasts;
