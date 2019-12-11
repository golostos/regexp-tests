import React from "react";
import Samples from "./Samples";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      regexp: "",
      samples: []
    }
    this.changeDesc = this.changeDesc.bind(this)
    this.changeRegexp = this.changeRegexp.bind(this)
  }

  changeDesc(event) {
    const newState = { ...this.state, ...{ description: event.target.value } }
    if (/^[\w\s\,\.]*$/.test(event.target.value)) this.setState(newState)
  }

  changeRegexp(event) {
    const newState = { ...this.state, ...{ regexp: event.target.value } }
    this.setState(newState)
  }

  render() {
    return (
      <>
        <h3>Description:</h3>
        <textarea className="input" id="description" value={this.state.description} onChange={this.changeDesc} />
        <h3>Type regexp here:</h3>
        <textarea className="input" id="regexp" value={this.state.regexp} onChange={this.changeRegexp} />
        <h3>Samples:</h3>
        <Samples samples={this.state.samples} />
      </>
    )
  }
}

// export default function Task(props) {
//   return (
//     <>
//       <h3>Description:</h3>
//       <textarea className="input" id="description" defaultValue={taskdb.description} />
//       <h3>Type regexp here:</h3>
//       <textarea className="input" id="regexp" defaultValue={taskdb.regexp} />
//       <h3>Samples:</h3>
//       <Samples samples={taskdb.samples} />
//       {/* <div className="samples"></div> */}
//     </>
//   )
// }