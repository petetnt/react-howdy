import React from 'react';
import { injectState } from 'freactal';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '../../components/Button';
import InfoText from '../../components/InfoText';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledInfoText = styled(InfoText)`
  text-align: center;
  width: 100%;
`;

export default injectState(
  ({
    state: { textToCopy, showCopiedNotification },
    effects: { textCopied },
  }) =>
    <Wrapper>
      <CopyToClipboard text={textToCopy} onCopy={textCopied}>
        <Button>Copy to clipboard</Button>
      </CopyToClipboard>
      {showCopiedNotification ? <StyledInfoText>Copied!</StyledInfoText> : null}
    </Wrapper>,
);
