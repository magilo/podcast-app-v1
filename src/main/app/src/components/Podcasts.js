import React, { Component } from 'react';
import { Search, PodcastView, Playlist } from './index'
import axios from 'axios';

/*** top level component ***/
class Podcasts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastDetails: {},
      podcastToAdd: {},
      playlist: []
    }
    this.handleViewDetailsCB = this.handleViewDetailsCB.bind(this)
    this.handleAddPodcastCB = this.handleAddPodcastCB.bind(this)
    this.handleDeletePodcastCB = this.handleDeletePodcastCB.bind(this)
  }

  handleViewDetailsCB = (childData) => {
    //display podcast to user
    // console.log('viewDetailsCB', childData)
    this.setState({ podcastDetails: childData }, function () {

      // console.log("handleView", this.state.podcastDetails)
    })
  }

  handleAddPodcastCB = async (childData) => {

    // this.setState({ podcastToAdd: childData })
    try {
      // console.log('inside comp mount')
      const res = await axios.post('/api/podcasts', childData)
      // this.setState({ playlist: data });
      if (res.status === 201) {
        const { data } = await axios.get('/api/podcasts')
        // console.log(data)
        this.setState({ playlist: data });
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleDeletePodcastCB = async (childData) => {
    console.log('delete podcastcb', childData)
    try {
      const res = await axios.delete(`/api/podcasts/${childData}`);
      // console.log('delete', res)
      if (res.status === 204) {
        const { data } = await axios.get('/api/podcasts')
        // console.log(data)
        this.setState({ playlist: data });
      }
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    try {
      // console.log('inside comp mount')
      const { data } = await axios.get('/api/podcasts')
      this.setState({ playlist: data });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { podcastDetails, playlist } = this.state
    return (
      <div className="App-body">
        <div className="App-search">
          <Search
            viewDetailsCB={this.handleViewDetailsCB}
            addPodcastCB={this.handleAddPodcastCB} />
        </div>

        <div className="App-podcast-view">
          <PodcastView
            podcastDetails={podcastDetails} />
        </div>

        <div className="App-playlist">
          <h5> playlist </h5>
          <Playlist
            playlist={playlist}
            viewDetailsCB={this.handleViewDetailsCB}
            deletePodcastCB={this.handleDeletePodcastCB} />
        </div>
      </div>
    )
  }
}

export default Podcasts;
