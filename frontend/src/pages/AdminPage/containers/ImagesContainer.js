import React from "react";
import ImagesView from "../components/ImagesView";

class ImagesContainer extends React.Component {
  state = {
    url: []
  };

  componentDidMount() {
    this.getImgs();
  }

  getImgs() {
    fetch(
      "https://pixabay.com/api?key=15107156-da183c9b8b82bda79cb3047a5&colors=grey&per_page=100"
    )
      .then(response => response.json())
      .then(photos => {
        const mappedPhotos = photos.hits.map(photos => ({
          url: photos.largeImageURL
        }));
        this.setState({ url: mappedPhotos });
      });
  }

  render() {
    const props = {
      url: this.state.url
    };
    return <ImagesView {...props} />;
  }
}

export default ImagesContainer;
