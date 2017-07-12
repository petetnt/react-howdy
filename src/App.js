import React from 'react';
import { provideState, injectState, softUpdate as update } from "freactal";
import styled from 'styled-components';
import EmojiSheet from "./containers/EmojiSheet";
import Picker from "./containers/Picker";

const wrapComponentWithState = provideState({
  initialState: () => ({ emojis: [
    { id: 'face_with_cowboy_hat', skin: 1, key: 1 },
    { id: 'beer', skin: 1, key: 2 },
    { id: 'beer', skin: 1, key: 3 },
    { id: 'beer', skin: 1, key: 4 },
    { id: 'beer', skin: 1, key: 5 },
    { id: 'beer', skin: 1, key: 6 },
    { id: 'beer', skin: 1, key: 7 },
    { id: 'beer', skin: 1, key: 8 },
    { id: 'beer', skin: 1, key: 9 },
    { id: 'beer', skin: 1, key: 10 },
    { id: 'point_down', skin: 1, key: 11 },
    { id: 'beer', skin: 1, key: 12 },
    { id: 'beer', skin: 1, key: 13 },
    { id: 'point_down', skin: 1, key: 14 },
    { id: 'beer', skin: 1, key: 15 },
    { id: 'beer', skin: 1, key: 16 },
    { id: 'beer', skin: 1, key: 17 },
    { id: 'beer', skin: 1, key: 18 },
    { id: 'boot', skin: 1, key: 19 },
    { id: 'boot', skin: 1, key: 20 },
  ],
  selectedEmoji: null,
  }),
  effects: {
    selectEmoji: update((state, key) => ({
      selectedEmoji: key,
    })),
    updateEmoji: update(({ emojis }, newEmoji, key) => ({
      emojis: emojis.map((emoji) => {
        if (emoji.key !== key) {
          return emoji; 
        }
        
        return { id: newEmoji.id, skin: 1, key };
      })
  }))
  },
});

const Container = styled.div`

`;

const EmojiSheetWrapper = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex:
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

const PickerWrapper = styled.div`
  width: 50%;
`;

export default wrapComponentWithState(injectState(() => (
  <Container>
    <Title>react-howdy</Title>
    <Wrapper>
      <EmojiSheetWrapper>
        <EmojiSheet />
      </EmojiSheetWrapper>  
      <PickerWrapper>
        <Picker />
      </PickerWrapper>
    </Wrapper>
  </Container>
)));
