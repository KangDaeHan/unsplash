import React from "react";
import styled from "styled-components";

const WrapButton = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #333333;
  border-radius: 0.5rem;
  color: black;
  cursor: pointer;
`;

class LoadMore extends React.Component {
  static defaultProps = {
    loadMore: () => console.log("더보기 버튼이 존재 하지 않음")
  };

  render() {
    return (
      <WrapButton>
        <Button onClick={this.props.loadMore}>더보기</Button>
      </WrapButton>
    );
  }
}

export default LoadMore;
