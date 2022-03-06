import React, { Component } from 'react';


//results component should pass back the selected podcast (to display)
//can also add to playlist
class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: ""
    }
  }

  render() {
    return (
      <div>
        <h4>enter title/artist in search</h4>
      </div>
    )
  }
}

export default Results;
