import React from 'react';
import { Flex, FlexItem } from '../styles/Flex';
import { COLOR_PRIMARY, COLOR_LIGHT } from '../styles/ThemeConstants';
import logo from '../../assets/img/logo_white.png';
import selfieImg from '../../assets/img/open-doodles-selfie.svg';
import { MeLightH5, MeLightH6 } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import LoginForm from '../forms/LoginForm';

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
            “Whether you are launching a start-up or leading an established
            company, you should start establishing your social media presence if
            you haven't already”
          </MeLightH5>
          <MeLightH6 color={COLOR_LIGHT}>- Sir Richard Branson.</MeLightH6>
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
      <Flex flex="3">
        <Flex
          justify="flex-end"
          width="100%"
          padding={{
            top: 8
          }}
          margin={{
            right: 60
          }}
        >
          <FlexItem>
            <LoginForm></LoginForm>
          </FlexItem>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UnauthenticatedApp;
