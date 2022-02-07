import React from "react";
import PropTypes from "prop-types";

import "../../style.css";

class SearchBar extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({
      searchQuery: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({
        searchQuery: "",
    })
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoFocus="off"
            autoComplete="true"
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
