import React from "react";
import Samples from "./Samples";

export default function TaskTemplate(props) {
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