import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ id, bg, isLiked }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={bg} />
      <button>{isLiked ? "Unlike" : "Like"}</button>
    </Link>
  </Container>
);