import React from "react";
import { Link } from "react-router-dom";

const TaskHead = (props) => (
  <li className="task">
    <Link to={'/tasks/' + props.id}>
      <span className="id">{props.id}</span>
      <span className="description">{props.description}</span>
    </Link>
  </li>
)

export default class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: []
    };
  }

  componentDidMount() {
    fetch('/api/alltasks').then(response => {
      if (response.ok) return response.json()
    }).then(db => {
      this.setState({ db })
    })
  }

  render() {
    return (
      <ul className="tasks-list">
        {this.state.db.map(task => <TaskHead id={task.id} description={task.description} key={task.id} />)}
      </ul>
    )
  }
}