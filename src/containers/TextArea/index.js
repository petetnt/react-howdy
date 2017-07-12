import React from 'react';
import { injectState } from 'freactal';
import TextArea from '../../components/TextArea';

export default injectState(({ state: { text }, effects: { updateText } }) =>
  <TextArea
    value={text}
    rows={2}
    onChange={({ currentTarget: { value } }) => updateText(value)}
  />,
);
