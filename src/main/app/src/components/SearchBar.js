import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userReqParams: "",
      results: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSearchSubmit(event) {
    this.props.searchSubmitCB(this.state.userReqParams)
    event.preventDefault()
    this.setState({
      userReqParams: ""
    })
  }

  render() {
    return (
      <div >
        <form
          className="search-bar"
          onSubmit={this.handleSearchSubmit}>

          <input
            className="search-bar"
            name="userReqParams"
            type="text"
            value={this.state.userReqParams}
            placeholder="e.g. This American Life"
            onChange={this.handleChange}
          />
          <button
            className="search-bar"
            type="submit"
            onSubmit={this.handleSearchSubmit}>
            🔍
          </button>

        </form>
      </div>
    )
  }
}

export default Search;
