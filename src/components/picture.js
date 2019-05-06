import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 0.75rem;
`;

class Picture extends React.Component {
  static defaultProps = {
    url: ""
  };

  render() {
    return (
      <Card>
        <img src={this.props.url} alt="" />
      </Card>
    );
  }
}

export default Picture;
