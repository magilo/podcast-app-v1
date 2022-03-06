import React, { Component } from 'react';
import { Search, Titlebar, Playlist } from './index'

/*** top level component ***/
class Podcasts extends Component{
  constructor(props){
    super(props)
    this.state = {
      temp:""
    }
  }

  render(){
    return (
      <div className="App-body">
        <div className="App-search">
          <Search />
        </div>

        <div className="App-podcast-view">
          <Search />
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
