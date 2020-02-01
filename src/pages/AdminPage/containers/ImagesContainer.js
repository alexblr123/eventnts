import React from "react";
import ImagesView from "../components/ImagesView";

class ImagesContainer extends React.Component {
  state = {
    tileData: [
      {
        img: image,
        title: "Image",
        author: "author",
        cols: 2
      },
    ]
  };
  getImgs() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(photos => {
      const mappedPhotos = photos.map(photos => ({
        url: photos.url,
        
      }))
   }
}
  render() {
    const props = {
      tileData: this.state.tileData
    };
    return (
      <>
        <></>
        <ImagesView {...props} />
      </>
    );
  }
}

export default ImagesContainer;
