import React from "react";
import { Fight } from "./Fight";
import Resultado from "./Resultado";
import Stats from "./Stats";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name1: "",
      name2: "",
      img1: "",
      img2: "",
      url1: "",
      url2: "",
      likes1: "",
      likes2: "",
      ganador: {},
      stats: []
    };
  }

  click() {
    let nodes1;
    let likes1 = 0;
    let likes2 = 0;
    let nodes2;
    console.log("123123")
    fetch("https://www.instagram.com/" + this.state.name1 + "/?__a=1").then(res => res.json()).then(myJson => {
    nodes1 = myJson.graphql.user.edge_owner_to_timeline_media.edges;
    console.log(nodes1)
      for (let i of nodes1) {
        likes1 += i.node.edge_liked_by.count;
      }

      this.setState({
        likes1: likes1,
        img1: myJson.graphql.user.profile_pic_url
      });

      localStorage.setItem("d", this.state.likes1);



      fetch("https://www.instagram.com/" + this.state.name2 + "/?__a=1").then(res => res.json()).then(myJson2 => {
        nodes2 = myJson2.graphql.user.edge_owner_to_timeline_media.edges;
        for (let i of nodes2) {
          likes2 += i.node.edge_liked_by.count;
        }
        this.setState({
          likes2: likes2,
          img2: myJson2.graphql.user.profile_pic_url

        });
        if (this.state.likes1 > this.state.likes2) {
          var user1 = {
            name: this.state.name1,
            img: this.state.img1
          }
          this.setState({
            ganador: user1
          });
          console.log(this.state.ganador);
        } else {
          var user2 = {
            name: this.state.name2,
            img: this.state.img2
          }
          this.setState({
            ganador: user2
          });
        }
        fetch("/stats", {
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({ name1: this.state.name1, name2: this.state.name2, ganador:this.state.ganador.name })
        }).then(res => res.json()).then(myJSon => {
          if (myJson) {
            alert("A new Record was added to the data base!");
            console.log(myJSon);
          } else {
            alert("aiuuda");
          }
        });
      });
    })

  }

  onChangeName1(name) {
    this.setState({
      name1: name
    });
    console.log(this.state.name1);
  }

  onChangeName2(name) {
    this.setState({
      name2: name
    });
    console.log(this.state.name2);
  }
  renderFoto() {
    if (this.state.ganador.name === undefined) {
    } else if (this.state.ganador) {
      return (
        <Resultado
          ganador={this.state.ganador.name}
          img={this.state.ganador.img}
          name1= {this.state.name1}
          name2={this.state.name2} />
      );
    }
  }

  onStats() {
    fetch("/stats", {
      method: "GET"
    }).then(res => res.json()).then(myJson => {
      this.setState({
        stats: myJson
      });
    }).catch(err => {
      alert("It was not possible to access the stats.");
    });
  }

  onRandom(){
    fetch("/stats", {
      method: "GET"
    }).then(res => res.json()).then(myJson => {
      this.setState({
        stats: myJson
      });
      var arr = this.state.stats;
      var onj = (arr[Math.floor(Math.random()*arr.length)]);
      this.setState({
        name1: onj.name1,
        name2: onj.name2
      });
      this.click();
    }).catch(err => {
      alert("It was not possible to access the stats.");
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Fight
              changeName1={this.onChangeName1.bind(this)}
              changeName2={this.onChangeName2.bind(this)} />
            <button onClick={this.click.bind(this)}>Fight !</button>
          </div>
          <div className="col-sm-6">
            <div>
              
              <div>
              </div>
              {this.renderFoto()}
            </div>

          </div>
        </div>
        <br />
        <hr />
        <div>
          <button onClick = {this.onStats.bind(this)}>Stats</button>
          <br/>
          <button onClick ={this.onRandom.bind(this)}> Random Fight </button>
        </div>
        <hr/>
        <div className="container">
          <Stats
            stats={this.state.stats}/>
        </div>


      </div>
    );
  }


}