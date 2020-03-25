import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SPACINGS } from './ThemeConstants';

export const FlexLayout = styled.div`
  display: flex;
  ${props => props.directions && `flex-direction: ${props.direction};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
  ${props => props.content && `align-content: ${props.content};`}
  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.wrap && `flex-wrap: ${props.wrap};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.order && `order: ${props.order};`}
  ${props => props.self && `align-self: ${props.self};`}
  ${props => props.margin && `margin: ${props.margin + 'px'};`}
  ${props => props.padding && `padding: ${props.padding + 'px'};`}
`;

FlexLayout.propTypes = {
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around ',
    'space-evenly'
  ]),
  content: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'baseline'
  ]),
  align: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline'
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flex: PropTypes.number,
  order: PropTypes.number,
  self: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  margin: SPACINGS,
  padding: SPACINGS
};
