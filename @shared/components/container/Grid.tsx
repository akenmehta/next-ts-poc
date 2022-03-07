import styled from 'styled-components';

export interface IGridProps {
  maxWidth?: string; // * default = 1200px
  hasDefaultPadding?: boolean; // * default = true
}

const Grid = styled.div<IGridProps>`
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1200px')};
  &:after {
    display: table;
    clear: both;
  }
  ${({ hasDefaultPadding = true }) => hasDefaultPadding && `padding: 0 15px;`}
`;
export { Grid };
