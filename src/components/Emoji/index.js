import React from 'react';
import { shape, string, number, func } from 'prop-types';
import styled from 'styled-components';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const EmojiWrapper = styled.div`
  cursor: pointer;
  ${props => props.isSelected ? `
    border: 1px solid pink;
    border-radius: 2px;
  ` : ''}
`;

const PropTypes = {
  emoji: shape({
    id: string.isRequired,
    skin: number.isRequired,
    key: number.isRequired,
  }).isRequired,
  selectedEmoji: number,
  selectEmoji: func.isRequired,  
}

const DefaultProps = {
  selectedEmoji: null, 
}

const CustomEmoji = ({selectedEmoji, selectEmoji, emoji: {id, skin, key }, ...rest}) => (
  <EmojiWrapper isSelected={ selectedEmoji === key }
>
    <Emoji
      onClick={() => selectEmoji(key)} emoji={{ id, skin }} {...rest} set="twitter" size={24}/>
  </EmojiWrapper>
);

CustomEmoji.propTypes = PropTypes;
CustomEmoji.defaultProps = DefaultProps;

export default CustomEmoji;
