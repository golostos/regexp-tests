import React, { useState, useEffect } from "react";
import Samples from "./Samples";
import Rolling from "../rolling.svg";
import { useParams } from "react-router-dom";

const timer = function (time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(value) }, time)
  })
}

function TaskTemplate(props) {
  return (
    <>
      <h3>Description:</h3>
      <textarea className="input" id="description" value={props.db.description} onChange={props.changeDesc} />
      <h3>Type regexp here:</h3>
      <textarea className="input" id="regexp" value={props.db.regexp} onChange={props.changeRegexp} />
      <h3>Samples:</h3>
      <Samples samples={props.db.samples} />
    </>
  )
}

export default function Task(props) {
  const [loaded, setLoaded] = useState(false);
  const [db, setDb] = useState({
    description: "",
    regexp: "",
    samples: []
  });
  const { id } = useParams();

  const changeDesc = (event) => {
    const newDb = { ...db, ...{ description: event.target.value } }
    if (/^[\w\s\,\.]*$/.test(event.target.value)) setDb(newDb)
  }

  const changeRegexp = (event) => {
    const newDb = { ...db, ...{ regexp: event.target.value } }
    setDb(newDb)
  }  

  useEffect(() => {
    fetch('/api/tasks/' + id).then(response => {
      if (response.ok) return response.json()
    }).then(task => {
      return timer(1000, task)
    }).then(task => {
      console.log(task)
      setLoaded(true)
      const newState = {
        description: task.description,
        regexp: task.regexp,
        samples: task.samples
      }
      setDb(newState);
    })
  }, [])
  
  return (
    <>
      {
        !loaded ?
          (<Rolling style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: 'auto' }} />)
          : <TaskTemplate changeDesc={changeDesc} 
          changeRegexp={changeRegexp} 
          db={db}
          />
      }
    </>
  )
}

// export default class Task extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       description: "",
//       regexp: "",
//       samples: []
//     }
//     this.loaded = false;
//     this.changeDesc = this.changeDesc.bind(this)
//     this.changeRegexp = this.changeRegexp.bind(this)
//   }

//   componentDidMount() {
//     // const { id } = useParams();
//     console.log(window.location)
//     fetch('/api/tasks/' + id).then(response => {
//       if (response.ok) return response.json()
//     }).then(task => {
//       return timer(2000, task)
//     }).then(task => {
//       console.log(task)
//       this.loaded = true;
//       const newState = {
//         description: task.description,
//         regexp: task.regexp,
//         samples: task.samples
//       }
//       this.setState(newState);
//     })
//   }

//   changeDesc(event) {
//     const newState = { ...this.state, ...{ description: event.target.value } }
//     if (/^[\w\s\,\.]*$/.test(event.target.value)) this.setState(newState)
//   }

//   changeRegexp(event) {
//     const newState = { ...this.state, ...{ regexp: event.target.value } }
//     this.setState(newState)
//   }

//   render() {
//     return (
//       <>
//         {
//           !this.loaded ?
//             (<Rolling style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: 'auto' }} />)
//             : (
//               <>
//                 <h3>Description:</h3>
//                 <textarea className="input" id="description" value={this.state.description} onChange={this.changeDesc} />
//                 <h3>Type regexp here:</h3>
//                 <textarea className="input" id="regexp" value={this.state.regexp} onChange={this.changeRegexp} />
//                 <h3>Samples:</h3>
//                 <Samples samples={this.state.samples} />
//               </>
//             )
//         }
//       </>
//     )
//   }
// }
