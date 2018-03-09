import React from "react";

export  default class Resultado extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h1>The Winner is: </h1>
          <h2 className="tittle">{this.props.ganador}</h2>
        </div>
        <div>
          <a href={"https://www.instagram.com/"+ this.props.ganador+"/"} target="_blank">
            <img className="result"src={this.props.img} alt={this.props.ganador + "'s profile picture"} />
          </a>
          <div>
            <h3>{this.props.name1 + " VS "+this.props.name2}</h3>
          </div>
            
         
        </div>
      </div>

    );
  }
}