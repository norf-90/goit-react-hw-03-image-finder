import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = props => {
  const { renderData, title } = props;

  return renderData.map(img => {
    const { id, webformatURL } = img;
    return (
      <Item key={id}>
        <Image src={webformatURL} alt={title} />
      </Item>
    );
  });
};

export default ImageGalleryItem;
