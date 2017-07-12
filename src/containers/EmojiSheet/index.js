import React from 'react';
import { shape, arrayOf, string, number, func } from 'prop-types';
import { injectState } from 'freactal';
import styled from 'styled-components';
import Emoji from '../../components/Emoji';
import Empty from '../../components/Empty';
import patterns from '../../constants/patterns';

const PropTypes = {
  state: shape({
    emojis: arrayOf(
      shape({
        id: string.isRequired,
        skin: number.isRequired,
        key: number.isRequired,
      }),
    ).isRequired,
    selectedEmoji: number,
  }).isRequired,
  effects: shape({
    selectEmoji: func.isRequired,
  }).isRequired,
};

const DefaultProps = {
  selectedEmoji: null,
};

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 1rem;
`;

const Row = styled.div`display: flex;`;

const renderEmojiRow = (
  { state: { emojis, selectedEmoji }, effects: { selectEmoji } },
  { range: [start, stop], pattern },
  rowId,
) => {
  const emoji = emojis.slice(start, stop);
  let emojiCounter = 0;

  return (
    <Row>
      {pattern.map((shouldRender, index) => {
        if (shouldRender && emojiCounter < emoji.length) {
          const toRender = (
            <Emoji
              selectedEmoji={selectedEmoji}
              selectEmoji={selectEmoji}
              emoji={emoji[emojiCounter]}
              key={`${rowId}-${emoji[emojiCounter].key}`}
            />
          );

          emojiCounter += 1;
          return toRender;
        }

        return <Empty key={`${rowId}-empty-${index}`} />; // eslint-disable-line
      })}
    </Row>
  );
};

renderEmojiRow.propTypes = PropTypes;
renderEmojiRow.defaultProps = DefaultProps;

export default injectState(state =>
  <Rows>
    {renderEmojiRow(state, { range: [0, 1], pattern: patterns[0] }, 'row-1')}
    {renderEmojiRow(state, { range: [1, 4], pattern: patterns[1] }, 'row-2')}
    {renderEmojiRow(state, { range: [4, 7], pattern: patterns[2] }, 'row-3')}
    {renderEmojiRow(state, { range: [7, 11], pattern: patterns[3] }, 'row-4')}
    {renderEmojiRow(state, { range: [11, 13], pattern: patterns[4] }, 'row-5')}
    {renderEmojiRow(state, { range: [13, 15], pattern: patterns[5] }, 'row-6')}
    {renderEmojiRow(state, { range: [15, 17], pattern: patterns[6] }, 'row-7')}
  </Rows>,
);
