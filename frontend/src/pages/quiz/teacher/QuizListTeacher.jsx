import React, { useState, useEffect } from 'react';
import QuizMainImage from 'assets/images/Quiz/퀴즈메인화면.png';
import Background from 'components/Basic/Background';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuizBox = styled.div`
  width: 105rem;
  height: 65.625rem;
  background: rgba(255, 249, 236, 0.5);
  border-radius: 3.125rem;
  position: absolute;
  display: flex;
  flex-direction: column;
`;
const OXboxContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 100%;
  margin-top: 5rem;
`;
const OXbox = styled.div`
  width: 45rem;
  height: 45rem;
  border-radius: 1.25rem;
  /* border: 20px solid var(--sub1, #596FB7); */
  background: #fff;
  position: relative;
  display: flex;
  font-size: 25rem;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  transition: border 0.3s;
  &:hover {
    border: 20px solid var(--sub1, #596fb7);
  }
`;
const QuestionNumber = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const ChoiceBox = styled.div`
  background: rgba(255, 202, 90, 0.8);
  width: 90rem;
  height: 9.6875rem;
  border-radius: 1.25rem;
  align-items: center;
  transition: border 0.3s;
  display: flex;
  justify-content: space-between;
  padding: 0 1.19rem;
  &:hover {
    border: 20px solid var(--sub1, rgba(255, 202, 90, 0.8));
  }
`;

const SvgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionBox = styled.div`
  position: relative;
  width: 100%;
  height: 55.625rem;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
const Number = styled.div`
  color: #000;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  transform: translateY(-50%);
  width: 1.75rem;
  height: 4.0625rem;
  position: relative;
  top: 1.5rem;
  left: 2rem;
`;

const Header = styled.div`
  position: relative;
  bottom: 41.5rem;
  right: 21rem;
`;

const Pagetitle = styled.div`
  color: #000;
  font-size: 4.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const QuizListTeacher = () => {
  return (
    <Background backgroundImage={QuizMainImage}>
      <Layout>
        <MainContent>
          <Header>
            <Pagetitle>퀴즈 - 문제집 목록</Pagetitle>
          </Header>
          <QuizBox>
            <QuestionNumber />
            <QuestionBox>
              <ChoiceBox>
                <Number>1.</Number>
                <SvgBox>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='99'
                    height='100'
                    viewBox='0 0 99 100'
                    fill='none'
                  >
                    <path
                      d='M78.375 26.709L72.5588 20.834L49.5 44.1257L26.4412 20.834L20.625 26.709L43.6838 50.0007L20.625 73.2923L26.4412 79.1673L49.5 55.8756L72.5588 79.1673L78.375 73.2923L55.3162 50.0007L78.375 26.709Z'
                      fill='black'
                    />
                  </svg>
                </SvgBox>
              </ChoiceBox>
              <ChoiceBox>
                <Number>2.</Number>
                <SvgBox>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='99'
                    height='100'
                    viewBox='0 0 99 100'
                    fill='none'
                  >
                    <path
                      d='M78.375 26.709L72.5588 20.834L49.5 44.1257L26.4412 20.834L20.625 26.709L43.6838 50.0007L20.625 73.2923L26.4412 79.1673L49.5 55.8756L72.5588 79.1673L78.375 73.2923L55.3162 50.0007L78.375 26.709Z'
                      fill='black'
                    />
                  </svg>
                </SvgBox>
              </ChoiceBox>
              <ChoiceBox>
                <Number>3.</Number>
                <SvgBox>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='99'
                    height='100'
                    viewBox='0 0 99 100'
                    fill='none'
                  >
                    <path
                      d='M78.375 26.709L72.5588 20.834L49.5 44.1257L26.4412 20.834L20.625 26.709L43.6838 50.0007L20.625 73.2923L26.4412 79.1673L49.5 55.8756L72.5588 79.1673L78.375 73.2923L55.3162 50.0007L78.375 26.709Z'
                      fill='black'
                    />
                  </svg>
                </SvgBox>
              </ChoiceBox>
              <ChoiceBox>
                <Number>4.</Number>
                <SvgBox>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='99'
                    height='100'
                    viewBox='0 0 99 100'
                    fill='none'
                  >
                    <path
                      d='M78.375 26.709L72.5588 20.834L49.5 44.1257L26.4412 20.834L20.625 26.709L43.6838 50.0007L20.625 73.2923L26.4412 79.1673L49.5 55.8756L72.5588 79.1673L78.375 73.2923L55.3162 50.0007L78.375 26.709Z'
                      fill='black'
                    />
                  </svg>
                </SvgBox>
              </ChoiceBox>
            </QuestionBox>
          </QuizBox>
        </MainContent>
      </Layout>
    </Background>
  );
};

export default QuizListTeacher;
