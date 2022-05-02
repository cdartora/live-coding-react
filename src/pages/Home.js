import React from "react";
import {Link} from 'react-router-dom';
import {addMeme, getMemes} from '../services/memes'
import styled from 'styled-components';

const SaveButton = styled.button`
  background-color: transparent;
  border: black 1px solid;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const DirectionButtons = styled.button`
  background-color: transparent;
  border: black 1px solid;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  width: 100%
`;

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      memes: [],
      name: '',
      image: '',
    };
  }

  componentDidMount() {
    this.getMemes();
  }

  getMemes = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const { data } = await response.json();
    this.setState({
      memes: data.memes,
      index: 0,
      name: data.memes[0].name,
      image: data.memes[0].url
    })
  };

  nextMeme = () => {
    const { index, memes } = this.state;
    this.setState((prev) => ({
      index: prev.index + 1
    }), () => {
      this.setState({
        name: memes[index + 1].name,
        image: memes[index + 1].url
      })
    })
  };

  previousMeme = () => {
    const { index, memes } = this.state;
    this.setState((prev) => ({
      index: prev.index - 1
    }), () => {
      this.setState({
        name: memes[index - 1].name,
        image: memes[index - 1].url
      })
    })
  }

  render() {
    const {name, image} = this.state;
    return(
      <Container>
        <Container>
          <Link to="/favorites">
            Saved Memes
          </Link>
          <h1>Zemes</h1>
          <p>Visualizador de Memes</p>
          <SaveButton
            onClick={() => addMeme({name, image})}
          >
            <img src="https://super.so/icon/dark/save.svg" alt="" />
          </SaveButton>
          <h2>{name}</h2>
        <ContainerButtons>
          <DirectionButtons
            onClick={this.previousMeme}
          >
            <img src="https://super.so/icon/dark/arrow-left.svg" alt="" />
          </DirectionButtons>
          <DirectionButtons
            onClick={this.nextMeme}
          >
            <img src="https://super.so/icon/dark/arrow-right.svg" alt="next" />
          </DirectionButtons>
        </ContainerButtons>
          <img src={image} alt={name} width="400px"/>
        </Container>
      </Container>
    )
  }
}

export default Home;