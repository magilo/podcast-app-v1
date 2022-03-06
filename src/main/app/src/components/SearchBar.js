import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
    this.props.searchSubmitCB(this.state.title)
    event.preventDefault()
    this.setState({
      title: ""
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
            name="title"
            type="text"
            value={this.state.title}
            placeholder="e.g. pirates"
            onChange={this.handleChange}
          />
          <button
            className="search-bar"
            type="submit"
            onSubmit={this.handleSearchSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

        </form>
      </div>
    )
  }
}

export default Search;
