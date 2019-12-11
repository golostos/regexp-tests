import React from "react";

export default function Samples(props) {
  const samples = props.samples.map((el, index) => (
    <div className="sample" key={index}>
      <input className="input" type="text" placeholder="Sample" value={el} />
      <div className="answer no-match"><span>Don't match</span></div>
    </div>
  ))
  console.log(samples);
  return (
    <div className="samples">
      {samples}
    </div>
  )
}