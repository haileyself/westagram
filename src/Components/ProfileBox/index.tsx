import * as React from 'react';
import styled from 'styled-components';

interface ProfileBoxProps {
  src: string;
  id: string;
  time: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
`;

const ProfileImgBox = styled.a`
  width: 40px;
  height: 40px;
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
  font-size: 10px;
  padding-top: 4px;
  line-height: 15px;
  color: #999;
  text-align: left;
`;

class ProfileBox extends React.Component<{ profileData: ProfileBoxProps }> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <ProfileImgBox>
          <ProfileImg src={this.props.profileData.src} />
        </ProfileImgBox>
        <IdSection>
          <IdTitle href="/">
            <Id>{this.props.profileData.id}</Id>
          </IdTitle>
          <IdSubtitle>{this.props.profileData.time}</IdSubtitle>
        </IdSection>
      </Wrapper>
    );
  }
}

export default ProfileBox;
