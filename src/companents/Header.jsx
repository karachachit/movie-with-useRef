import { createRef, useState } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/FormInput";
import Button from "./UI/Button";
import { styled } from "styled-components";

const Header = ({ pushData }) => {
  const [openModal, setOpenModal] = useState(false);

  const nameMovie = createRef();
  const imageUrl = createRef();
  const ratingMovie = createRef();

  const closeCansel = () => {
    setOpenModal((prev) => !prev);
  };

  const addInfoHandler = (e) => {
    e.preventDefault();
    const name = nameMovie.current.value;
    const image = imageUrl.current.value;
    const rating = ratingMovie.current.value;

    if (name && image && rating) {
      const data = {
        name,
        image,
        rating,
        id: Math.random().toString(),
      };
      pushData(data);
      closeCansel();
    }
  };
  return (
    <HeaderStyle>
      <h2>Favorite Movies</h2>
      <StyledAdd onClick={closeCansel}>
        ADD MOVIE
      </StyledAdd>

      {openModal ? (
        <Modal onClose={closeCansel}>
          <div>
            <Input
              labelName="Movie Title"
              id="name"
              inputType="text"
              ref={nameMovie}
            />
            <Input
              labelName="Image URl"
              id="img"
              inputType="text"
              ref={imageUrl}
            />
            <Input
              labelName="YourRating"
              id="rating"
              inputType="number"
              ref={ratingMovie}
            />
          </div>

          <ButtonContainer>
            <Button color="aqua" onClick={closeCansel}>
              Cancel
            </Button>
            <Button color="blue" onClick={addInfoHandler}>
              Add
            </Button>
          </ButtonContainer>
        </Modal>
      ) : null}
    </HeaderStyle>
  );
};
export default Header;

const HeaderStyle=styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgb(55, 55, 246);
  color: white;
  padding: 1rem;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-top: 1rem;
`;

const StyledAdd=styled.button`
    width: 150px;
  height: 50px;
  background-color: rgb(242, 136, 60);
  color: white;
`