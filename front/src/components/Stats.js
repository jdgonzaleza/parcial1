import React from "react";

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Stats</h1>
        <div className="row">
          <div className="col-sm-3">
            <label ><b>Fighter 1</b></label>
          </div>
          <div className="col-sm-3">
            <label ><b>Fighter 2</b></label>
          </div>
          <div className="col-sm-3">
            <label ><b>Date</b></label>
          </div>
          <div className="col-sm-3">
            <label ><b>Winner</b></label>
          </div>
        </div>
        {this.props.stats.map(
          (s,i)=>{
            return(
              <div key = {i} className="row intro ">
                <div className="col-sm-3">
                  
                  <input type="text" value={s.name1} disabled />
                </div>

                <div className="col-sm-3">
                  
                  <input type="text" value={s.name2} disabled />
                </div>
                <div className="col-sm-3">
                  
                  <input type="text" value={s.date} disabled />
                </div>
                <div className="col-sm-3">
                  <input type="text" value={s.ganador} disabled />
                </div>
              </div>
              
            );
          }
        )}


      </div>


    );

  }
}