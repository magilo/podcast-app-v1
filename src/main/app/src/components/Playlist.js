import React, { Component } from 'react';
import axios from 'axios';

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


  render() {
    const { playlist } = this.props
    if (playlist.length > 0) {
      const listItems = playlist.map((p) =>
        <div className="podcast" key={p.id}>
          <span > {p.name} {p.title}  </span>
          <div>
            -------------
            <button
              type="remove"
              value={p.id}
              onClick={this.handleDeletePodcast.bind(this, p)}> x</button>
            -------------
          </div>
        </div>)
      return (
        <div>
          {listItems}
        </div>
      )
    } else {
      return (
        <div>
          nothing on playlist
        </div>
      )
    }
  }
}

export default Playlist;
