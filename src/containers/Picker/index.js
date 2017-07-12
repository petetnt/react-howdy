import React from 'react';
import { injectState } from 'freactal';
import { Picker } from 'emoji-mart';
import InfoText from '../../components/InfoText';

export default injectState(
  ({ state: { selectedEmoji }, effects: { updateEmoji } }) =>
    selectedEmoji
      ? <Picker
          onClick={emoji => updateEmoji(emoji, selectedEmoji)}
          set="twitter"
        />
      : <InfoText>Select an emoji to get started</InfoText>,
);
