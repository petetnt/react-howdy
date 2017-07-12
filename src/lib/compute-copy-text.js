import patterns from '../constants/patterns';

export default ({ emojis, text }) => {
  let emojiCounter = 0;

  const emojiText = patterns
    .map(pattern =>
      pattern
        .map(shouldRender => {
          if (shouldRender && emojiCounter < emojis.length) {
            const { native } = emojis[emojiCounter];
            emojiCounter += 1;
            return native;
          }

          return '　 ';
        })
        .join(''),
    )
    .join('\n');

  return `.   ${emojiText.substring(1)}
  ${text}`;
};
