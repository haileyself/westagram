import * as React from 'react';
import styled from 'styled-components';
// import ProfileBox from 'src/Components/ProfileBox';
import { DotsHorizontalRounded } from 'styled-icons/boxicons-regular/DotsHorizontalRounded';
import { Comment } from 'styled-icons/evil/Comment';
import { Heart } from 'styled-icons/evil/Heart';
import { Share } from 'styled-icons/feather/Share';
import { Saved } from 'styled-icons/octicons/Saved';

interface PostingBoxState {
  comments: CommentsArr[];
  commentValue: string;
  id: number;
}

interface Props {
  postingData: PostingBoxProps
}
// 프롭스 인터페이스를 정의해주고(통째로하는 거 )
// 그 안에 해당하는 프롭스 데이터를 넣어준다.

interface CommentsArr {
  name: string;
  message: string;
  id: number;
  commentLiked: boolean;
}

interface PostingBoxProps {
  src: string;
  imgName: string;
  text: string;
  like: string;
  id: string;
}

class PostingBox extends React.Component<
  Props,
  PostingBoxState
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 1,
      commentValue: '',
      comments: [],
    };
  }

  handleLikeIcon(id: number, index: number) {
    console.log(index, 'index값');
    console.log(this.state.comments[index].commentLiked, 'commentLiked접근');
    const commentsCopy = JSON.parse(JSON.stringify(this.state.comments));
    console.log(commentsCopy, '카피본');
    commentsCopy[index].commentLiked = !commentsCopy[index].commentLiked;
    this.setState({ comments: commentsCopy });
  }

  getComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ commentValue: e.target.value });
  };

  addComment = () => {
    return this.setState({
      id: this.state.id + 1,
      commentValue: '', // 이걸 안해주면 input값이 빈칸이 안됨
      comments: [
        ...this.state.comments,
        {
          name: 'hailey',
          message: this.state.commentValue,
          id: this.state.id,
          commentLiked: false,
        },
      ],
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <Wrapper>
        <MainHeader>
          <ProfileWrapper>
            <ProfileImgBox>
              <ProfileImg src={this.props.postingData.src} />
            </ProfileImgBox>
            <IdSection>
              <IdTitle href="/">
                <Id>{this.props.postingData.id}</Id>
              </IdTitle>
              <IdSubtitle>6시간전</IdSubtitle>
            </IdSection>
          </ProfileWrapper>
          <ShowMoreButton>
            <ShowMoreIcon />
          </ShowMoreButton>
        </MainHeader>
        <PhotoBox>
          <PostingPhoto src={this.props.postingData.src} />
        </PhotoBox>
        <ContentBox>
          <IconSection>
            <IconInnerWrap>
              <LikeIconBox>
                <LikeIcon />
              </LikeIconBox>
              <CommentIconBox>
                <CommentIcon />
              </CommentIconBox>
              <ShareIconBox>
                <ShareIcon />
              </ShareIconBox>
            </IconInnerWrap>
            <SaveInnerWrapper>
              <SaveIconBox>
                <SaveIcon />
              </SaveIconBox>
            </SaveInnerWrapper>
          </IconSection>
          <CountLikeBox>
            <CountLike>좋아요 {this.props.postingData.like}</CountLike>
          </CountLikeBox>
          <MyStoryBox>
            <MyId>{this.props.postingData.id}</MyId>
            <MyStory>{this.props.postingData.text}</MyStory>
          </MyStoryBox>
          <CommentBox>
            <CommentListWrap>
              {comments.map((el, index) => {
                return (
                  <>
                    <CommetList>
                      <CommentWrap>
                        <CommentID>
                          <CommentIDLink>{el.name}</CommentIDLink>
                        </CommentID>
                        <CommentText>{el.message}</CommentText>
                      </CommentWrap>
                      <CommentLikeBox
                        onClick={() => this.handleLikeIcon(el.id, index)}
                      >
                        {el.commentLiked === true ? (
                          <HeartIcon className="fas fa-heart" />
                        ) : (
                          <HeartIcon className="far fa-heart" />
                        )}
                      </CommentLikeBox>
                    </CommetList>
                  </>
                );
              })}
              <TimeLine> 20시간 전</TimeLine>
            </CommentListWrap>
          </CommentBox>
        </ContentBox>
        <WriteCommentWrap>
          <WriteCommentBox
            type="textarea"
            placeholder="댓글 달기..."
            onChange={this.getComment}
            value={this.state.commentValue}
          />
          <PostButtonBox onClick={this.addComment}>게시</PostButtonBox>
        </WriteCommentWrap>
      </Wrapper>
    );
  }
}

export default PostingBox;

const Wrapper = styled.div`
  max-width: 614px;
  width: 100%;
  margin-bottom: 60px;
`;

const MainHeader = styled.div`
  display: flex;
  padding: 16px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #efefef;
  border-bottom: none;
  background-color: #fff;
`;

const ShowMoreButton = styled.button`
  width: 30px;
  background-color: #fff;
  padding-right: 0px;
`;

const ShowMoreIcon = styled(DotsHorizontalRounded)`
  width: 100%;
  background-color: #fff;
`;

const PhotoBox = styled.div`
  width: 100%;
`;

const PostingPhoto = styled.img`
  width: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 0px 16px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  background-color: #fff;
`;

const IconSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
`;

const IconInnerWrap = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  margin-left: -7px;
`;

const LikeIconBox = styled.button`
  width: 40px;
  background-color: #fff;
  padding: 0;
  padding-right: 5px;
`;

const LikeIcon = styled(Heart)`
  width: 100%;
`;

const CommentIconBox = styled.button`
  width: 40px;
  background-color: #fff;
  padding: 0;
  padding-right: 5px;
`;

const CommentIcon = styled(Comment)`
  width: 100%;
`;

const ShareIconBox = styled.button`
  width: 27px;
  background-color: #fff;
  padding: 0;
`;

const ShareIcon = styled(Share)`
  width: 100%;
`;

const SaveInnerWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

const SaveIconBox = styled.button`
  width: 24px;
  background-color: #fff;
  padding: 0;
`;

const SaveIcon = styled(Saved)`
  width: 100%;
`;

const CountLikeBox = styled.div`
  width: 100%;
  padding-top: 3px;
  margin-bottom: 8px;
`;

const CountLike = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  background-color: #fff;
  padding: 0;
`;

const MyStoryBox = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const MyId = styled.button`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: -5px;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  font-size: 14px;
`;

const MyStory = styled.span`
  font-size: 14px;
`;

const CommentBox = styled.div`
  width: 100%;
`;

const CommentListWrap = styled.ul`
  width: 100%;
  list-style: none;
`;

const CommetList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const CommentID = styled.h3`
  align-items: center;
  display: inline-flex;
  font-size: 1em;
  font-weight: bold;
  margin-right: 4px;
`;

const CommentIDLink = styled.a`
  width: 100%;
  cursor: pointer;
`;

const CommentText = styled.span`
  font-size: 14px;
  color: rgb(38, 38, 38);
  font-weight: 400;
`;

const CommentLikeBox = styled.button`
  background-color: #fff;
  padding: 0;
  margin-left: auto;
  margin-right: 4px;
  cursor: pointer;
`;

const HeartIcon = styled.i`
  font-size: 14px;
  color: #b2b2b2;
`;

const CommentWrap = styled.div`
  display: flex;
`;

const TimeLine = styled.p`
  font-size: 10px;
  color: #999999;
  margin-top: 7px;
  padding-bottom: 8px;
  letter-spacing: 0.2px;
`;

const WriteCommentWrap = styled.div`
  width: 100%;
  border: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding: 0px 16px;
  background-color: #fff;
`;

const WriteCommentBox = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b2b2b2;
    align-items: center;
  }
  border: none;
  width: 80%;
`;

const PostButtonBox = styled.button`
  color: rgb(56, 151, 240);
  font-weight: 600;
  background-color: #fff;
  padding: 0;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
`;

const ProfileImgBox = styled.div`
  width: 42px;
  height: 42px;
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