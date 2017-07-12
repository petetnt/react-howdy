import React from 'react';
import { shape, arrayOf, string, number, func } from 'prop-types';
import { injectState } from 'freactal';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';

const PropTypes = {
  state: shape({
    emojis: arrayOf(
      shape({
        id: string.isRequired,
        skin: number.isRequired,
        key: number.isRequired,
      })).isRequired,
    selectedEmoji: number,
  }).isRequired,
  effects: shape({
    selectEmoji: func.isRequired,  
  }).isRequired,
}

const DefaultProps = {
  selectedEmoji: null, 
}

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const renderEmojiRow = ({ state: { emojis, selectedEmoji }, effects: { selectEmoji }}, [ start, stop ], ...rest) => (
  <Row>
  {emojis.slice(start, stop).map((emoji) => (
    <Emoji selectedEmoji={selectedEmoji} selectEmoji={selectEmoji} emoji={emoji} key={emoji.key} {...rest} />
  ))}
  </Row>
);

renderEmojiRow.propTypes = PropTypes;
renderEmojiRow.defaultProps = DefaultProps;

export default injectState(state => (
  <Rows>
    { renderEmojiRow(state, [0, 1]) }
    { renderEmojiRow(state, [1, 4]) }
    { renderEmojiRow(state, [4, 10]) }
    { renderEmojiRow(state, [10, 14]) }
    { renderEmojiRow(state, [14, 16]) }
    { renderEmojiRow(state, [16, 18]) }
    { renderEmojiRow(state, [18, 20]) }
  </Rows>  
));