import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import imagesApi from "../services/imagesApi";
import ImageGallery from "./gallery/ImageGallery";
import Button from "./button/Button";
import s from "./App.module.css";
import Loader from "react-loader-spinner";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getFetchImages();
    }
    if (this.state.searchQuery.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleSearchImages = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  getFetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState((prevState) => ({ ...prevState, isLoading: true }));

    const options = {
      searchQuery,
      page,
    };

    imagesApi
      .fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() =>
        this.setState((prevState) => ({ ...prevState, isLoading: false }))
      );
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={s.App}>
        {isLoading && (
          <Loader
            className={s.loader}
            type="Hearts"
            color="red"
            height={80}
            width={80}
          />
        )}
        <Searchbar onSubmit={this.handleSearchImages} />

        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button getFetchImages={this.getFetchImages} />}
      </div>
    );
  }
}
