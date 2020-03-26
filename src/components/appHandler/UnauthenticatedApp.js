import React from 'react';
import { Flex } from '../styles/Flex';
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
							width: 32%;
							max-width: 500px;
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
				<Flex height="40px" justify="flex-end" align="center" gap="10">
					<MeCaption>© 2020 MeUp</MeCaption>|
					<MeCaption>All rights reserved.</MeCaption>|
					<MeCaption>
						<a href="https://meup.com/privacy">Privacy policies</a>
					</MeCaption>
					|
					<MeCaption>
						<a href="https://meup.com/terms">Terms & Conditions</a>
					</MeCaption>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default UnauthenticatedApp;
