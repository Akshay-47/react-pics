import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    // this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(val) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: val
      }
    });
    this.setState({
      images: response.data.results
    });
    console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={e => this.onSearchSubmit(e)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
