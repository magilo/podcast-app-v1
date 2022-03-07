import React, { Component } from 'react';


//results component should pass back the selected podcast (to display)
//can also add to playlist
class PodcastView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      podcastDetails: this.props.podcastDetails
    }
  }

  // refactor this later
  // move podcastDetails to state in Podcasts then pass it to PodcastView as a prop
  componentDidUpdate(prevProps) {

    if (Object.keys(this.props.podcastDetails).length > 0) {
      if (Object.keys(prevProps.podcastDetails).length === 0) {
        //if it's the first selection
        this.setState({ podcastDetails: this.props.podcastDetails })
      } else if (prevProps.podcastDetails.id !== this.props.podcastDetails.id) {
        //if it's a different selection
        this.setState({ podcastDetails: this.props.podcastDetails })
      }
    }
    // if (this.props.podcastDetails !== prevProps.podcastDetails) {
    //   console.log('inside podcastview', this.props)

    // }
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


// //stateless component
// function PodcastView(props) {
//   console.log('props', props);

//   useEffect(() => {

//   })

//   return (

//     < div >
//       <h5>details</h5>
//     </div >
//   )
// }

// export default PodcastView
