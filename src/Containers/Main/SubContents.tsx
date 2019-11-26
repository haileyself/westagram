import * as React from 'react';
import styled from 'styled-components';
import ProfileBox from 'src/Components/ProfileBox';
import profileImage from 'src/assets/images/myprofileimg.png';
import ProfileData from '../../Containers/Main/profileData';



const SubContents: React.FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ProfileWrapper>
          <ProfileImgBox>
            <ProfileImg src={profileImage} />
          </ProfileImgBox>
          <IdSection>
            <IdTitle href="/">
              <Id>haileyself</Id>
            </IdTitle>
            <IdSubtitle>17시간전</IdSubtitle>
          </IdSection>
        </ProfileWrapper>
      </InnerWrapper>
      <StoryBox>
        <SubBoxHeader>
          <SubBoxName>스토리</SubBoxName>
          <ShowSubBoxLink>
            <ShowSubBox>모두 보기</ShowSubBox>
          </ShowSubBoxLink>
        </SubBoxHeader>
        <StorySection>
          {ProfileData.map(el => (
            <StoryButton>
              <ProfileBox profileData={el} />
            </StoryButton>
          ))}
        </StorySection>
      </StoryBox>
      <RecommendBox>
        <SubBoxHeader>
          <SubBoxName>회원님을 위한 추천</SubBoxName>
          <ShowSubBoxLink>
            <ShowSubBox>모두 보기</ShowSubBox>
          </ShowSubBoxLink>
        </SubBoxHeader>
        <RecommendSection>
          {ProfileData.map(el => (
            <RecommendList>
              <ProfileBox profileData={el} />
              <FollowButton>팔로우</FollowButton>
            </RecommendList>
          ))}
        </RecommendSection>
      </RecommendBox>
      <SubFooter>
        <InfoBox>
          <InfoList>
            <InfoListLink>Instagram 정보</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>지원</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>홍보 센터</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>API</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>채용 정보</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>개인정보처리방침</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>약관</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>디렉터리</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>프로필</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>해시태그</InfoListLink>
          </InfoList>
          <InfoList>
            <InfoListLink>언어</InfoListLink>
          </InfoList>
        </InfoBox>
        <CopyRightInfo>© 2019 INSTAGRAM</CopyRightInfo>
      </SubFooter>
    </Wrapper>
  );
};

export default SubContents;


const Wrapper = styled.div`
  max-width: 293px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 128px;
  margin-left: -24px;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  padding-left: 5px;
  width: 100%;
`;

const StoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  border: 1px solid rgb(230, 230, 230);
  background-color: #fff;
`;

const SubBoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 4px 16px;
`;

const SubBoxName = styled.div`
  width: 80%;
  font-size: 14px;
  line-height: 18px;
  color: rgba(var(--f52, 153, 153, 153), 1);
`;

const ShowSubBoxLink = styled.a`
  width: 20%;
  cursor: pointer;
`;

const ShowSubBox = styled.div`
  color: #262626;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
`;

const StorySection = styled.div`
  padding-left: 16px;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 8px;
  height: 180px;
`;

const StoryButton = styled.button`
  margin-bottom: 10px;
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  padding-left: 0;
`;

const RecommendBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(230, 230, 230);
  margin: 12px 0px;
  background-color: #fff;
`;

const RecommendSection = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
`;

const RecommendList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FollowButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  color: #3897f0;
  font-weight: 600;
  padding-right: 0;
  width: 20%;
  font-size: 12px;
  text-align: center;
`;

const SubFooter = styled.section`
  width: 100%;
  max-width: 290px;
`;

const InfoBox = styled.ul`
  width: 100%;
  list-style: none;
`;

const InfoList = styled.li`
  display: inline-block;
  color: #c7c7c7;
  &:not(:last-child)::after {
    content: '\00B7';
    margin: 0 0.25em;
  }
`;

const InfoListLink = styled.a`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
`;

const CopyRightInfo = styled.div`
  color: #c7c7c7;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  margin-top: 16px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
`;

const ProfileImgBox = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
`;

const IdSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const IdTitle = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Id = styled.h2`
  text-align: center;
  display: inline;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #262626;
`;

const IdSubtitle = styled.div`
  font-size: 12px;
  padding-top: 4px;
  line-height: 15px;
  color: #999;
  text-align: left;
`;