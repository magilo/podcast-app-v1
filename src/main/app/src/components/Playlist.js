import React, { Component } from 'react';
import axios from 'axios';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    }
  }

  async componentDidMount() {
    try {
      console.log('inside comp mount')
      const { data } = await axios.get('/api/podcasts')
      this.setState({ playlist: data });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { playlist } = this.state;
    if (playlist.length > 0) {
      const listItems = playlist.map((p) =>
        <div className="podcast" key={p.id}>
          <span > {p.title} {p.name} </span>
          <button> x</button>
        </div>)
      return (
        <div>
          {listItems}
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}

export default Playlist;
