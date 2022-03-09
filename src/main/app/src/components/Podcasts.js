import React, { Component } from 'react';
import { Search, PodcastView, Playlist, SortBy } from './index'
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
    this.handleSortByCB = this.handleSortByCB.bind(this)
  }

  handleViewDetailsCB = (childData) => {
    this.setState({ podcastDetails: childData })
  }

  handleAddPodcastCB = async (childData) => {
    try {
      const res = await axios.post('/api/podcasts', childData)
      if (res.status === 201) {
        const { data } = await axios.get('/api/podcasts')
        this.setState({ playlist: data });
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleDeletePodcastCB = async (childData) => {
    try {
      const res = await axios.delete(`/api/podcasts/${childData}`);
      if (res.status === 204) {
        const { data } = await axios.get('/api/podcasts')
        this.setState({ playlist: data });
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleSortByCB = async (childSort, childOrder) => {
    console.log('from child', childSort, childOrder)
    try {
      const res = await axios.get(`/api/podcasts?sort=${childSort}&order=${childOrder}`);
      console.log('res', res)
      if (res.status === 200) {
        this.setState({ playlist: res.data });
      }
    } catch (err) {
      console.log(err)
    }

  }


  async componentDidMount() {
    try {
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
          <h4> playlist </h4>
          <div><SortBy sortByCB={this.handleSortByCB} /></div>
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
