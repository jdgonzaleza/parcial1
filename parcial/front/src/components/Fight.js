import React from "react";


export default class Fight extends React.Component {
  constructor() {
    super();
    this.state = {
      fighter1: "",
      fighter2: "",
      likes1:"",
      likes2:""
    };
  }
  click(){
      let nodes1;
      let likes1=0;
      let likes2=0;
      let nodes2;
    fetch("https://www.instagram.com/"+this.state.fighter1+"/?__a=1").then(res=> res.json()).then(myJson=>{
      nodes1 =myJson.user.media.nodes;
      console.log(nodes1);
      for(let i of nodes1){
        likes1+= i.likes.count;
        console.log(i.likes.count, likes1);
      }
      this.setState({
        likes1:likes1
      });
    console.log("Likes totales: ",likes1);
    });
    
    fetch("https://www.instagram.com/"+this.state.fighter2+"/?__a=1").then(res=> res.json()).then(myJson=>{
    nodes2 =myJson.user.media.nodes;
      for(let i of nodes2){
        likes2+= nodes2[i].likes.count;
        console.log(nodes2[i].likes.count, likes2);
      }
      this.setState({
        likes2:likes2
      });
    
    })
  }


  onChangeFight1(event) {
    this.setState({
      fighter1: event.target.value
    });
    console.log(this.state.fighter1);
  }
  onChangeFight2(event) {
    this.setState({
      fighter2: event.target.value
    });
    console.log(this.state.fighter2);
  }

  render() {
    return (
      <div>
        <label htmlFor="">Fighter 1</label>
        <input type="text" onChange={this.onChangeFight1.bind(this)} />
        <label htmlFor="">Fighter 2</label>
        <input type="text" onChange={this.onChangeFight2.bind(this)} />
        <button type="submit" onClick={this.click.bind(this)}> FIGHT!</button>
      </div>
    );
  }
}