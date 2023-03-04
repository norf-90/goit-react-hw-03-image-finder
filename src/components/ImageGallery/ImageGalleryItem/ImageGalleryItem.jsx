import React, { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { renderData, title } = this.props;
    return renderData.map(img => {
      const { id, webformatURL, largeImageURL } = img;
      return (
        <Item key={id}>
          <Image src={webformatURL} alt={title} onClick={this.toggleModal} />
          {this.state.isModalOpen && (
            <Modal toggleModal={this.toggleModal}>
              <img src={largeImageURL} alt={title} />
            </Modal>
          )}
        </Item>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  renderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  title: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
