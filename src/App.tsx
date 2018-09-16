import * as React from 'react';
import './App.css';
import Form from './components/Form'
import Titles from './components/Titles'



export default class App extends React.Component<{}> {

  public state = {
    name: undefined,
    ability: undefined,
    speed: undefined,
    specialDefense: undefined,
    specialAttack: undefined,
    defense: undefined,
    attack: undefined,
    hp: undefined,
    weight: undefined,
  }



  public getSummoner = async (summonerName: any) => {
    summonerName.preventDefault()
    const pokeNum = summonerName.target.elements.summonerName.value;
    const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);
    const data = await apiCall.json()

    this.setState({
      name: data.name,
      ability: data.abilities[0].ability.name,
      speed: data.stats[0].base_stat,
      specialDefense: data.stats[1].base_stat,
      specialAttack: data.stats[2].base_stat,
      defense: data.stats[3].base_stat,
      attack: data.stats[4].base_stat,
      hp: data.stats[5].base_stat,
      weight: data.weight,

    })

  }




  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          <div className="dropZone">

          <Titles />

          <Form getSummoner={this.getSummoner}/>

          <div>
            <p>
              name: {this.state.name}
              <br/>
              ability: {this.state.ability}
              <br/>
              speed: {this.state.speed}
              <br/>
              specialDefense: {this.state.specialDefense}
              <br/>
              specialAttack: {this.state.specialAttack}
              <br/>
              defense: {this.state.defense}
              <br/>
              attack: {this.state.attack}
              <br/>
              hp: {this.state.hp}
              <br/>
              weight: {this.state.weight}

            </p>
          </div>

          
          </div>
        </div>
      </div>
    );
  }
}