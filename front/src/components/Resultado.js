import React from "react";

export  default class Resultado extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h2 className="tittle">{this.props.ganador}</h2>
        </div>
        <div>
          <a href={"https://www.instagram.com/"+ this.props.ganador+"/"} target="_blank">
            <img className="result"src={this.props.img} alt={this.props.ganador + "'s profile picture"} />
          </a>
            
         
        </div>
      </div>

    );
  }
}