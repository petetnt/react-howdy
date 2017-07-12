import React from 'react';
import { injectState } from 'freactal';
import { Picker } from 'emoji-mart'

export default injectState(({state: { selectedEmoji }, effects: { updateEmoji }}) => (
  selectedEmoji ? <Picker onClick={(emoji) => updateEmoji(emoji, selectedEmoji)} set="twitter" /> : <div>Select an emoji to get started</div>
));