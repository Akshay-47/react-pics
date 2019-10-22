import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      inputVal: event.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.inputVal);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.inputVal}
              onChange={event => this.onInputChange(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
