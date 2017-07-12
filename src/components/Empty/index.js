import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';

const PropTypes = {
  repeat: number,
};

const DefaultProps = {
  repeat: 4,
};

const EmptySpan = styled.span`
  display: block;
  width: 24px;
`;

const Empty = ({ repeat = 4 }) =>
  <EmptySpan>
    {' '.repeat(repeat)}
  </EmptySpan>;

Empty.propTypes = PropTypes;
Empty.defaultProps = DefaultProps;

export default Empty;
