import React, { Component, Fragment } from 'react';

import Select from 'react-select';

const options = [
  { value: 'artist', label: 'artist' },
  { value: 'title', label: 'title' }
]


class SearchBy extends Component {
  state = {
    selectedOption: { value: 'search by', label: 'search by...' }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
    // console.log('selected', selectedOption);
    this.props.titleOrArtistCB(selectedOption);
  }


  render() {
    // console.log(this.props);
    const { selectedOption } = this.state;

    return (

      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          options={options}
          value={selectedOption}
          onChange={this.handleChange}
        />

        <div
          style={{
            color: 'hsl(0, 0%, 40%)',
            display: 'inline-block',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: '1em',
          }}
        >

        </div>
      </Fragment>
    );
  }
}

export default SearchBy;
