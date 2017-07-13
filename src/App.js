import React from 'react';
import { provideState, injectState, softUpdate as update } from 'freactal';
import styled from 'styled-components';
import {
  breakpoints,
  mediaBreakpointDownSm,
} from 'styled-bootstrap-responsive-breakpoints';
import EmojiSheet from './containers/EmojiSheet';
import Picker from './containers/Picker';
import TextArea from './containers/TextArea';
import CopyToClipboard from './containers/CopyToClipboard';
import computeCopyText from './lib/compute-copy-text';

let copyTimeout;

const wrapComponentWithState = provideState({
  initialState: () => ({
    emojis: [
      { id: 'face_with_cowboy_hat', skin: 1, native: '🤠', key: 'emoji-0' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-2' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-3' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-4' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-5' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-6' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-7' },
      { id: 'point_down', skin: 1, native: '👇', key: 'emoji-8' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-9' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-10' },
      { id: 'point_down', skin: 1, native: '👇', key: 'emoji-11' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-12' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-13' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-14' },
      { id: 'beer', skin: 1, native: '🍺', key: 'emoji-15' },
      { id: 'boot', skin: 1, native: '👢', key: 'emoji-16' },
      { id: 'boot', skin: 1, native: '👢', key: 'emoji-17' },
    ],
    selectedEmoji: null,
    showCopiedNotification: false,
    text: 'howdy. i am the default sheriff. please do change this text.',
  }),
  effects: {
    selectEmoji: update((state, key) => ({
      selectedEmoji: key,
    })),
    updateEmoji: update(({ emojis }, newEmoji, key) => ({
      emojis: emojis.map(emoji => {
        if (emoji.key !== key) {
          return emoji;
        }

        const { id, skin, native } = newEmoji;

        return { id, skin, native, key };
      }),
    })),
    updateText: update((state, text) => ({ text })),
    setShowCopiedNotification: update((state, showCopiedNotification) => ({
      showCopiedNotification,
    })),
    textCopied: effects => {
      window.clearTimeout(copyTimeout);
      const effect = effects.setShowCopiedNotification;
      effect(true);

      copyTimeout = setTimeout(() => {
        effect(false);
      }, 2500);
    },
  },
  computed: {
    textToCopy: computeCopyText,
  },
});

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${breakpoints.xl};
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;

  ${mediaBreakpointDownSm`
    flex-direction: column-reverse;
  `};
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

const EmojiSheetWrapper = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-right: 1px solid hotpink;

  ${mediaBreakpointDownSm`
    width: 100%;
    border-right: 0px solid transparent;
  `};
`;

const PickerWrapper = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  padding: 1rem;

  ${mediaBreakpointDownSm`
    width: 100%;
    border-right: 0px solid transparent;
  `};
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: hotpink;

  &:hover,
  &:focus {
    color: hotpink;
  }
`;

const Text = styled.span`
  padding-left: 1rem;
  padding-right: 1rem;

  &&&:not(:last-of-type) {
    border-right: 1px solid hotpink;
  }
`;

export default wrapComponentWithState(
  injectState(() =>
    <Container>
      <Title>
        <span role="img" aria-label="cowboy emoji">
          🤠
        </span>{' '}
        Sheriff generator{' '}
        <span role="img" aria-label="cowboy emoji">
          🤠
        </span>
      </Title>
      <Wrapper>
        <EmojiSheetWrapper>
          <EmojiSheet />
          <TextArea />
          <CopyToClipboard />
        </EmojiSheetWrapper>
        <PickerWrapper>
          <Picker />
        </PickerWrapper>
      </Wrapper>
      <Footer>
        <Text>
          Made by <Link href="https://twitter.com/pete_tnt">@pete_tnt</Link>
        </Text>
        <Text>
          Source at{' '}
          <Link href="https://github.com/petetnt/react-howdy">GitHub</Link>
        </Text>
        <Text>
          Hello to <Link href="https://motley.fi">Motley</Link>
        </Text>
      </Footer>
    </Container>,
  ),
);
