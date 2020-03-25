import styled from 'styled-components';
import { COLOR_GRAY } from './ThemeConstants';

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background: ${COLOR_GRAY};
	display: flex;
	${props =>
		props.margin &&
		props.margin.top &&
		`margin-top: ${props.margin.top + 'px'};`}
	${props =>
		props.margin &&
		props.margin.right &&
		`margin-right: ${props.margin.right + 'px'};`}
	${props =>
		props.margin &&
		props.margin.bottom &&
		`margin-bottom: ${props.margin.bottom + 'px'};`}
	${props =>
		props.margin &&
		props.margin.left &&
		`margin-left: ${props.margin.left + 'px'};`}

	div	{
		text-align: center;
		margin-left: calc(50% - 25px);
		margin-top: -11px;
		background: #fff;
		width: 50px;
	}
`;
