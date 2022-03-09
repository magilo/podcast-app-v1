import React, { Component, Fragment } from 'react';

import Select from 'react-select';

const sortOptions = [
  { value: 'author', label: 'author' },
  { value: 'title', label: 'title' }
]

const orderOptions = [
  { value: 'asc', label: '↑' },
  { value: 'desc', label: '↓' }
]


class SortBy extends Component {
  state = {
    selectedSortOption: { value: null, label: 'sort by...' },
    selectedOrderOption: { value: null, label: 'order by...' }
  }

  handleChangeSort = (selectedSortOption) => {
    this.setState({ selectedSortOption })
    this.props.sortByCB(selectedSortOption.value, this.state.selectedOrderOption.value)
    // console.log('selected', selectedOption);
    // this.props.titleOrNameCB(selectedSortOption.value);
  }
  handleChangeOrder = (selectedOrderOption) => {
    // console.log('event', selectedOrderOption)
    this.setState({ selectedOrderOption })
    // console.log('selected', selectedOption);
    // this.props.titleOrNameCB(selectedOption.value);
    this.props.sortByCB(this.state.selectedSortOption.value, selectedOrderOption.value)
  }



  render() {
    // console.log(this.props);
    const { selectedSortOption, selectedOrderOption } = this.state;

    return (

      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={sortOptions[0]}
          options={sortOptions}
          value={selectedSortOption}
          onChange={this.handleChangeSort}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={orderOptions[0]}
          options={orderOptions}
          value={selectedOrderOption}
          onChange={this.handleChangeOrder}
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

export default SortBy;
