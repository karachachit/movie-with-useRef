import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { styled } from "styled-components";

const MovieList = ({ title, img, rating, movie, movies, setMovieList }) => {
  console.log(title);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible((prev) => !prev);
  };
  const deleteHandler = () => {
    setModalVisible(false);
    const updatedMovieList = movies.filter((item) => movie.id !== item.id);
    setMovieList(updatedMovieList);
  };

  return (
    <>
      {isModalVisible ? (
        <Modal>
          <h4>Are you sure wanna delete?</h4>
          <BtnContainer>
             <Button color="black" onClick={toggleModalHandler}>
            No
          </Button>
          <Button color="blue" onClick={deleteHandler}>
            Yes
          </Button>
          </BtnContainer>
         
        </Modal>
      ) : null}
      <CardDivStyled>
        <ImageBox>
          <ImgStyle src={img} alt="img" />
        </ImageBox>
        <BtnVsRating1>
          <Title>{title}</Title>
          <BtnVsRating>
            <Rating>{rating}/5</Rating>
          
            <Button color="red" onClick={toggleModalHandler}>
              Delete
            </Button>
          </BtnVsRating>
        </BtnVsRating1>
      </CardDivStyled>
    </>
  );
};

export default MovieList;

const CardDivStyled = styled.div`
  display: flex;
  margin: 0 auto;
  width: 35rem;
  height: 9rem;
  background-color: #ffff;
  margin-top: 3rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px grey;
`;

const ImgStyle = styled.img`
  width: 150px;
  height: 165px;
  border-radius: 1rem;
`;

const BtnVsRating = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
`;

const BtnVsRating1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Rating = styled.h2`
  width: 8rem;
  height: 2rem;
  background-color: orange;
  border-radius: 1rem;
  color: #ffff;
  padding-top: 5px;
  text-align: center;
  margin-left: 1.5rem;
`;
const Title = styled.h2`
  padding: 1rem 2rem;
`;

const ImageBox = styled.div`
  margin: 1rem 0 0 2.5rem;
`;
const BtnContainer=styled.div`
  display: flex;
  padding-top:20px;
  gap: 10px;

`