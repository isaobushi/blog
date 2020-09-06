import React from 'react';
import PropTypes from 'prop-types';
import {CardItem, Title, Body, Footer} from './PostStyled'

/**
 * Primary UI component for user interaction
 */
export const Post = ({size, title, ...props }) => {
  return (
    <CardItem>
      <Title>{title}</Title>
      <Body />
      <Footer />
    </CardItem>
  );
};

Post.propTypes = {
  /**
   * How large should the Card be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Card Title content
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Post.defaultProps = {
  size: 'medium',
  onClick: undefined,
};

