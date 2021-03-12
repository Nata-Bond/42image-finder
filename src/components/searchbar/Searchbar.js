import React, { Component } from "react";
import s from "./searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    searchImage: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchImage: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchImage);
    this.reset();
  };

  reset = () => {
    this.setState({ searchImage: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
