import { shortnameToUnicode } from 'emojione';
import patterns from '../constants/patterns';

export default ({ emojis, text }) => {
  let emojiCounter = 0;

  const emojiText = patterns
    .map(pattern =>
      pattern
        .map(shouldRender => {
          if (shouldRender && emojiCounter < emojis.length) {
            // TODO - file issue to emojione that :face_with_cowboy_hat: doesn't work
            const id = emojis[emojiCounter].id.replace(
              'face_with_cowboy_hat',
              'cowboy',
            );
            const unicodeEmoji = shortnameToUnicode(`:${id}:`);
            emojiCounter += 1;
            return unicodeEmoji;
          }

          return '　 ';
        })
        .join(''),
    )
    .join('\n');

  return `.   ${emojiText.substring(1)}
  ${text}`;
};
