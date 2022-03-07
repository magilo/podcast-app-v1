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

  // async handleDeletePodcast(event) {
  //   event.preventDefault();
  //   try {
  //     const res = await axios.delete(`/api/podcasts/${event.target.value}`);
  //     const updatedPlaylist = this.state.playlist.filter(function (podcast) {
  //       if (podcast.id === parseInt(event.target.value)) {
  //         return false;
  //       }
  //       return true;
  //     });
  //     this.setState({ playlist: updatedPlaylist })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }



  // async componentDidMount() {
  //   try {
  //     // console.log('inside comp mount')
  //     const { data } = await axios.get('/api/podcasts')
  //     this.setState({ playlist: data });
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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
