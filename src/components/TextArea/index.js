import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

export default styled.textarea`
  font-size: 1.25rem;
  padding: 0.5rem;
  border-color: hotpink;
  width: 100%;
  max-width: ${breakpoints.sm};
  margin-left: auto;
  margin-right: auto;
`;
