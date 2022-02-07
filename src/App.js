import React from "react";
import { Puff } from "react-loader-spinner";

import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { fetchPhotos } from "./api/pixabay-api";

import "./style.css";

class App extends React.Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    currentImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getPhotos(this.state.query, this.state.page);
    }
  }

  getPhotos = (query, page) => {
    this.setState({
      isLoading: true,
    });
    fetchPhotos(query, page)
      .then((res) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...res],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  updateSearchQuery = (query) => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  handleImageClick = (image) => {
    this.setState({
      currentImage: image,
    });
  };

  handleModalClose = () => {
    this.setState({
      currentImage: {},
    })
  }

  render() {
    const loadingImages = this.state.images.length > 0 && !this.state.isLoading;
    return (
      <div className="App">
        {this.state.currentImage.id && (
          <Modal image={this.state.currentImage} closeModal={this.handleModalClose}/>
        )}
        <SearchBar onSubmit={this.updateSearchQuery} />

        <ImageGallery images={this.state.images} imageClick={this.handleImageClick}/>

        {loadingImages && (
          <Button
            onLoadMore={() => this.getPhotos(this.state.query, this.state.page)}
          />
        )}

        {this.state.isLoading && <Puff />}
      </div>
    );
  }
}

export default App;
