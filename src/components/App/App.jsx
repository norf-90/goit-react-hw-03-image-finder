import React, { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
// import { Searchbar, Loader, Modal, ImageGallery } from '.';
import Searchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  state = {
    serchName: '',
    page: 1,
    status: 'idle',
  };

  handleSubmit = serchName => {
    this.setState({ serchName, page: 1 });
  };

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <Loader /> */}
        {/* <Modal /> */}
        {/* <ImageGallery /> */}
        <GlobalStyles />
      </>
    );
  }
}

export default App;
