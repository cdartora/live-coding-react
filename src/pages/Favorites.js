import React from "react";
import { getMemes } from "../services/memes";

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      savedMemes: getMemes() || [],
    }
  }

  render() {
    const { savedMemes }= this.state;
    console.log(savedMemes);
    return(
      <div>Memes Salvos
        {
          savedMemes.map(({name, image}) => (
            <>
              <h2>{name}</h2>
              <img src={image} alt={name} width="400px"/>
            </>
          ))
        }
      </div>
    )
  }
}

export default Favorites;