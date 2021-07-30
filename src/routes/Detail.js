import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {!loading && data.movie &&(
        <>
        <Subtitle>{data.movie.language} - {data.movie.rating} 
        </Subtitle>
        <Description>{data.movie.description_intro}</Description>
        </>
        )}
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster> 
    </Container>
  );
};