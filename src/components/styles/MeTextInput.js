import styled from 'styled-components';
import {
  COLOR_PRIMARY_LIGHT,
  COLOR_BACKGROUND,
  COLOR_LIGHT
} from './ThemeConstants';

export const MeTextInput = styled.input`
  padding: 10px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  background: ${COLOR_BACKGROUND};
  display: inline-block;
  font-weight: 400;
  height: 40px;
  letter-spacing: normal;
  margin: 0 8px 0 0;
  outline-style: none;
  transition-property: background-color, outline, color, box-shadow,
    -webkit-box-shadow;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  &:hover {
    background-color: ${COLOR_LIGHT};
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 4px ${COLOR_PRIMARY_LIGHT};
  }

  &:focus {
    background-color: ${COLOR_LIGHT};
    border-color: ${COLOR_PRIMARY_LIGHT};
    box-shadow: 0 0 0 4px ${COLOR_PRIMARY_LIGHT};
  }
`;
