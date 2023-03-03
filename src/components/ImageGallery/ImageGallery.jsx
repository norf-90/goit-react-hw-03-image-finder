import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { List } from './ImageGallery.styled';

const API_KEY = '32728432-4d3846f56f533eef252fc55ae';

class ImageGallery extends Component {
  state = { ...this.props.initialState };

  fetchImages = (value, page) => {
    const baseUrl = `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    return fetch(baseUrl);
  };

  increasePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, initialState } = this.props;
    const { page } = this.state;

    if (prevProps.searchName !== searchName) {
      this.setState({ ...initialState });
    }

    if (prevState.page !== page || prevProps.searchName !== searchName) {
      this.setState({ status: 'pending' });
      this.fetchImages(searchName, page)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          console.log(response);
          return response.json();
        })
        .then(data => {
          const { hits, totalHits } = data;
          if (totalHits === 0) throw new Error('Nothing found');

          this.setState(prevState => {
            return {
              images: prevState.images
                ? [...prevState.images, ...hits]
                : [...hits],
              totalHits,
              status: 'resolved',
            };
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({ status: 'rejected' });
        });
    }
  }

  render() {
    const { status, images, totalHits, page } = this.state;
    const { searchName } = this.props;

    if (status === 'pending') return <Loader />;

    if (status === 'resolved')
      return (
        <>
          <List className="gallery">
            <ImageGalleryItem
              renderData={images}
              title={`${searchName} picture`}
            />
          </List>
          {images.length > 0 && totalHits - page * 12 > 0 && (
            <LoadMoreButton onClick={this.increasePage} />
          )}
        </>
      );

    if (status === 'rejected') return <ErrorMessage />;
  }
}

export default ImageGallery;
