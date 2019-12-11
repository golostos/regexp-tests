import React from "react";
import Samples from "./Samples";
import Rolling from "../rolling.svg";

const timer = function (time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(value)}, time)
  })
}

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      regexp: "",
      samples: []
    }
    this.loaded = false;
    this.changeDesc = this.changeDesc.bind(this)
    this.changeRegexp = this.changeRegexp.bind(this)
  }

  componentDidMount() {
    fetch('/api/tasks/5').then(response => {
      if (response.ok) return response.json()
    }).then(task => {
      return timer(2000, task)
    }).then(task => {
      console.log(task)
      this.loaded = true;
      const newState = {
        description: task.description,
        regexp: task.regexp,
        samples: task.samples
      }
      this.setState(newState);
    })
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
        {
          !this.loaded ?
            (<Rolling style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: 'auto' }} />)
            : (
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