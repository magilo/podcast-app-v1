import React, { Component } from 'react';

//refactor to functional component
class PodcastView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastDetails: this.props.podcastDetails
    }
  }


  handleLikeAPodcast(podcastToLike, event) {
    console.log('event', event)
    event.preventDefault()
    //pass back to Podcasts
    this.props.likePodcastCB(podcastToLike.id)
  }

  render() {
    const { podcastDetails } = this.props
    console.log(podcastDetails)

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
          <p>likes: {podcastDetails.likes} dislikes: 0 </p>
          <button
            type="counter"
            value={podcastDetails.id}
            onClick={this.handleLikeAPodcast.bind(this, podcastDetails)}> like</button>
        </div >
      )

    }
  }
}

export default PodcastView;


