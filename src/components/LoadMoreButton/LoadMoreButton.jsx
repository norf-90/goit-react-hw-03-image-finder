import React from 'react';
import { Button } from './LoadMoreButton.styled';

const LoadMoreButton = props => {
  const handleClick = () => {
    props.onClick();
    console.log('aksfjklajdjklsadjfklsad');
  };
  return (
    <Button type="button" onClick={handleClick}>
      Load more
    </Button>
  );
};

export default LoadMoreButton;
