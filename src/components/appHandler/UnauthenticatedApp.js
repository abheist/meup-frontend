import React from 'react';
import { Flex, FlexItem } from '../styles/Flex';
import { COLOR_PRIMARY, COLOR_LIGHT } from '../styles/ThemeConstants';
import logo from '../../assets/img/logo_white.png';
import selfieImg from '../../assets/img/open-doodles-selfie.svg';
import { MeLightH5, MeLightH6, MeCaption } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import LoginForm from '../forms/LoginForm';

import SignUpForm from '../forms/SignUpForm';

function UnauthenticatedApp(props) {
	return (
		<Flex fill="true">
			<Flex
				flex="1"
				background={COLOR_PRIMARY}
				padding={{ left: 60, top: 32, right: 32 }}
			>
				<div>
					<img src={logo} alt="MeUp Logo" height="45px" />
					<MeLightH5
						color={COLOR_LIGHT}
						css={`
							margin-top: 100px;
						`}
					>
						“Whether you are launching a start-up or leading an
						established company, you should start establishing your
						social media presence if you haven't already”
					</MeLightH5>
					<MeLightH6 color={COLOR_LIGHT}>
						- Sir Richard Branson.
					</MeLightH6>
					<img
						src={selfieImg}
						alt="MeUp vector showing a persons"
						css={`
							height: 70%;
							position: absolute;
							left: 10%;
							bottom: 0;
						`}
					/>
				</div>
			</Flex>
			<Flex
				flex="3"
				direction="column"
				width="100%"
				padding={{ right: 60 }}
				height="100%"
			>
				<Flex
					justify="flex-end"
					width="100%"
					padding={{
						top: 8
					}}
				>
					<LoginForm authenticateUser={props.authenticateUser} />
				</Flex>
				<Flex justify="center" align="center" height="inherit">
					<div
						css={`
							margin-top: -220px;
						`}
					>
						<SignUpForm />
					</div>
				</Flex>
				<Flex
					height="40px"
					as={MeCaption}
					justify="flex-end"
					align="center"
					gap="10"
				>
					<div>© 2020 MeUp</div>|<div>All rights reserved.</div>|
					<a href="https://example.com/privacy">Privacy policies</a>|
					<a href="https://meup.com/terms">Terms & Conditions</a>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default UnauthenticatedApp;
