import React from "react";


export class Fight extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange1(event) {
    this.props.changeName1(event.target.value);
  }
  onChange2(event) {
    this.props.changeName2(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="container">
         
           
              <label for="usr1"><b>Fighter 1</b></label>
              <input type="text" required onChange={this.onChange1.bind(this)} />
           
           
              <label for="text"><b>Fighter 2</b></label>
              <input type="text" required onChange={this.onChange2.bind(this)} />
            
          </div>



        </div>

  

    );
  }
}