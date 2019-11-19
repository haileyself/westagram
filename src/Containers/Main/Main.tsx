import * as React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import PostingBox from './PostingBox';
import SubContents from './SubContents';
import PostingData from './data';

interface PostingData {
  src: string;
  imgName: string;
  text: string;
  like: string;
  id: string;
}

const Wrapper = styled.div`
  margin-top: 65px;
  width: 100%;
  background-color: #fafafa;
`;

const MainSection = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-left: 20px;
  padding-top: 60px;
`;

const SubWrapper = styled.div`
  max-width: 293px;
  position: absolute;
  right: 0;
  width: 100%;
`;

const Main: React.SFC<PostingData> = () => {
  return (
    <Wrapper>
      <Header />
      <MainSection>
        {PostingData.map(el => (
          <PostingBox postingData={el} />
        ))}
        <SubWrapper>
          <SubContents />
        </SubWrapper>
      </MainSection>
    </Wrapper>
  );
};

export default Main;
