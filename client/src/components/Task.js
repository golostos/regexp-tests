import React from "react";
const taskdb = {
  "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "regexp": "a+b*",
  "samples": [
    "aaaaaaab",
    "abbbbbb",
    "hello",
    "a"
  ]
}

export default function Task(props) {
  return (
    <div>
      <h3>Description:</h3>
      <textarea className="input" id="description">
        {taskdb.description}
      </textarea>
      <h3>Type regexp here:</h3>
      <textarea className="input" id="regexp">
        {taskdb.regexp}
      </textarea>
      <h3>Samples:</h3>
      <div className="samples"></div>
    </div>
  )
}