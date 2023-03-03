import React, { Component } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const initialGalleryState = {
  images: null,
  totalHits: 0,
  status: 'idle',
  page: 1,
};

class App extends Component {
  state = {
    searchName: '',
  };

  static galleryState = { images: null, totalHits: 0, status: 'idle', page: 1 };

  changeStatus(status) {
    this.setState({ status });
  }

  handleSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          searchName={this.state.searchName}
          initialState={initialGalleryState}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
