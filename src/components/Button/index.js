import styled from 'styled-components';

export default styled.button`
  appearance: none;
  box-shadow: none;
  background-color: white;
  border: 2px solid hotpink;
  color: hotpink;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:focus,
  &:hover {
    background-color: hotpink;
    color: white;
  }
`;
