import React, { Component } from "react";
import "./ImageList.css";

class ImageList extends Component {
  constructor(props) {
    super(props);
    console.log(props.images);
  }

  componentDidMount() {}

  render() {
    const images = this.props.images.map(({ id, description, urls }) => (
      <img key={id} alt={description} src={urls.regular} />
    ));
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
