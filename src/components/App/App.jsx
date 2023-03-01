import React, { Component } from 'react';
import { Searchbar, Loader, Modal, ImageGallery } from '.';

class App extends Component {
  state = {};

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <>
        <Searchbar />
        <Loader />
        <Modal />
        <ImageGallery />
      </>
    );
  }
}

export default App;
