import React from "react";
import PropTypes from "prop-types";

import styles from "./Searchbar.module.css";

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
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
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
