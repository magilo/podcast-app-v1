import React, { Component } from 'react';

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
          <div > {p.title}    </div>
          <div>*** {p.name} ***</div>
          <div>
            -----------
            <button
              value={p.id}
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
