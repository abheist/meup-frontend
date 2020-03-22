import styled, { css } from 'styled-components';
import { Button } from 'reakit';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {
  DARK_COLOR,
  LIGHT_COLOR,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  DANGER_COLOR,
  PRIMARY_COLOR_DARK,
  PRIMARY_COLOR_DARKER,
  SUCCESS_COLOR_DARK,
  SUCCESS_COLOR_DARKER,
  WARNING_COLOR_DARK,
  DANGER_COLOR_DARK,
  DANGER_COLOR_DARKER,
  WARNING_COLOR_DARKER
} from '../app/ThemeConstants';

const buttonColors = theme.variants('mode', 'kind', {
  default: {
    light: css`
      color: ${DARK_COLOR};
      background: transparent;

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    `,
    dark: css`
      color: ${LIGHT_COLOR};
      background: transparent;

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    `
  },
  primary: {
    light: css`
      color: ${LIGHT_COLOR};
      background: ${PRIMARY_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${PRIMARY_COLOR_DARK};
          border-color: ${PRIMARY_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${PRIMARY_COLOR_DARKER};
          border-color: ${PRIMARY_COLOR_DARKER};
        }
      }
    `,
    dark: css`
      color: ${LIGHT_COLOR};
      background: ${PRIMARY_COLOR};
      border-color: ${PRIMARY_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${PRIMARY_COLOR_DARK};
          border-color: ${PRIMARY_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${PRIMARY_COLOR_DARKER};
          border-color: ${PRIMARY_COLOR_DARKER};
        }
      }
    `
  },
  success: {
    light: css`
      color: ${LIGHT_COLOR};
      background: ${SUCCESS_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${SUCCESS_COLOR_DARK};
          border-color: ${SUCCESS_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${SUCCESS_COLOR_DARKER};
          border-color: ${SUCCESS_COLOR_DARKER};
        }
      }
    `,
    dark: css`
      color: ${LIGHT_COLOR};
      background: ${SUCCESS_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${SUCCESS_COLOR_DARK};
          border-color: ${SUCCESS_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${SUCCESS_COLOR_DARKER};
          border-color: ${SUCCESS_COLOR_DARKER};
        }
      }
    `
  },
  warning: {
    light: css`
      color: ${LIGHT_COLOR};
      background: ${WARNING_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${WARNING_COLOR_DARK};
          border-color: ${WARNING_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${WARNING_COLOR_DARKER};
          border-color: ${WARNING_COLOR_DARKER};
        }
      }
    `,
    dark: css`
      color: ${LIGHT_COLOR};
      background: ${WARNING_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${WARNING_COLOR_DARK};
          border-color: ${WARNING_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${WARNING_COLOR_DARKER};
          border-color: ${WARNING_COLOR_DARKER};
        }
      }
    `
  },
  danger: {
    light: css`
      color: ${LIGHT_COLOR};
      background: ${DANGER_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${DANGER_COLOR_DARK};
          border-color: ${DANGER_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${DANGER_COLOR_DARKER};
          border-color: ${DANGER_COLOR_DARKER};
        }
      }
    `,
    dark: css`
      color: ${LIGHT_COLOR};
      background: ${DANGER_COLOR};

      &:not([aria-disabled='true']) {
        &:hover {
          background-color: ${DANGER_COLOR_DARK};
          border-color: ${DANGER_COLOR_DARK};
        }
        &:active,
        &[aria-expanded='true'] {
          background-color: ${DANGER_COLOR_DARKER};
          border-color: ${DANGER_COLOR_DARKER};
        }
      }
    `
  }
});

export const MeButton = styled(Button)`
  ${buttonColors}
  transition: box-shadow 0.15s ease-in-out;
  outline: 0;
  padding: 0.375em 0.75em;
  line-height: 1.5;
  border: transparent;
  cursor: pointer;
  font-size: 16px;
  border-radius: 0.25rem;

  &[aria-disabled='true'] {
    cursor: auto;
    opacity: 0.5;
  }

  &:focus,
  [aria-activedescendant] &[aria-selected='true'] {
    box-shadow: 0 0 0 0.2em rgba(0, 109, 255, 0.4);
    position: relative;
    z-index: 2;
  }
`;

Button.propTypes = {
  kind: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
};

MeButton.defaultProps = {
  kind: 'default'
};
