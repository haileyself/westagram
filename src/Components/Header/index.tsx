import * as React from 'react';
import exploreicon from 'src/assets/icons/exploreicon.png';
import likeicon from 'src/assets/icons/likeicon.png';
import logoicon from 'src/assets/icons/logoicon.png';
import myicon from 'src/assets/icons/myicon.png';
import westagramLogo from 'src/assets/icons/westagramLogo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 77px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  border-bottom: 1px solid rgb(219, 219, 219);
  background-color: #fff;
`;

const InnerWrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 980px;
`;

const LogoWrapper = styled.a`
  width: 37%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 46px;
  padding-right: 16px;
  border-right: 1px solid black;
  display: inline-block;
`;

const LogoIcon = styled.img.attrs({
  src: logoicon,
})`
  width: 100%;
`;

const LetterBox = styled.div`
  width: 130px;
  display: inline-block;
  padding-left: 16px;
`;

const LetterLogo = styled.img.attrs({
  src: westagramLogo,
})`
  width: 100%;
  margin-top: 10px;
`;

const SearchBoxWrap = styled.div`
  width: 26%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;

const SearchBox = styled.input`
  height: 32px;
  width: 100%;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  min-width: 125px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dbdbdb;
    text-align: center;
  }
`;

const NavWrapper = styled.div`
  width: 37%;
`;

const NavInnerWrapper = styled.div`
  width: 156px;
  height: 28px;
  position: relative;
  right: 0px;
  margin-left: auto;
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExploreBox = styled.a`
  width: 30px;
  display: inline-block;
  cursor: pointer;
`;

const ExploreIcon = styled.img.attrs({
  src: exploreicon,
})`
  width: 100%;
`;

const LikeBox = styled.a`
  width: 30px;
  display: inline-block;
  cursor: pointer;
`;

const LikeIcon = styled.img.attrs({
  src: likeicon,
})`
  width: 100%;
`;

const MyIconBox = styled.a`
  width: 30px;
  display: inline-block;
  cursor: pointer;
`;

const MyIcon = styled.img.attrs({
  src: myicon,
})`
  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoWrapper>
          <LogoBox>
            <LogoIcon />
          </LogoBox>
          <LetterBox>
            <LetterLogo />
          </LetterBox>
        </LogoWrapper>
        <SearchBoxWrap>
          <SearchBox type="text" placeholder="검색" />
        </SearchBoxWrap>
        <NavWrapper>
          <NavInnerWrapper>
            <ExploreBox>
              <ExploreIcon />
            </ExploreBox>
            <LikeBox>
              <LikeIcon />
            </LikeBox>
            <MyIconBox>
              <MyIcon />
            </MyIconBox>
          </NavInnerWrapper>
        </NavWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
