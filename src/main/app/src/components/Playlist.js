import React, { Component } from 'react';
import axios from 'axios';
import { SortBy } from './index'

//this can be a functional component

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: this.props.playlist
    }
    this.handleDeletePodcast = this.handleDeletePodcast.bind(this);
  }

  handleDeletePodcast(podcastToDelete, event) {
    event.preventDefault()
    this.props.deletePodcastCB(podcastToDelete.id)
  }

  handlePodcastToView(podcastData, event) {
    event.preventDefault()
    this.props.viewDetailsCB(podcastData)
  }




  render() {
    const { playlist } = this.props
    if (playlist.length > 0) {
      const listItems = playlist.map((p) =>
        <div className="podcast" key={p.id}>
          <span > {p.title} --- {p.name}   </span>
          <div>
            -----------
            <button
              value={p.id}
              // disabled={movieExists(res.imdbID, nominees)}
              onClick={this.handlePodcastToView.bind(this, p)}
            >
              <span id="info-icon">🛈</span>
            </button>
            ---
            <button
              type="remove"
              value={p.id}
              onClick={this.handleDeletePodcast.bind(this, p)}> x</button>
            -----------
          </div>
        </div>)
      return (
        <div>
          {/* <div><SortBy /></div> */}
          {listItems}
        </div>
      )
    } else {
      return (
        <div>
          {/* <div><SortBy /></div> */}
          nothing on playlist
        </div>
      )
    }
  }
}

export default Playlist;
