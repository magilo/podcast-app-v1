import React, { Component } from 'react';

//refactor to stateless component
class PodcastView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastDetails: this.props.podcastDetails
    }
  }

  render() {
    // console.log('this view', this.props)
    const { podcastDetails } = this.props

    if (Object.keys(podcastDetails).length === 0) {
      return (
        < div >
          <h3>select to play</h3>
        </div>
      )
    } else {
      return (

        < div >
          < div > {podcastDetails.title}</div>
          <img id="picture" src={podcastDetails.image} alt={podcastDetails.id} />
          <figure>
            <figcaption>{podcastDetails.name}</figcaption>
            <audio
              controls
              src={podcastDetails.audio}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          < div >{podcastDetails.description}</div>
          <div>likes dislikes </div>
        </div >
      )

    }
  }
}

export default PodcastView;


