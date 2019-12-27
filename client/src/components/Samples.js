import React, {useState, useEffect} from "react";

export default function Samples(props) {
  const parent = React.createRef()
    const samples = props.samples.map((el, index) => (
      <Input key={index} el={el}/>
  ))
  // componentDidMount, willUnmount, willUpdate
  useEffect(() => {
    const parentElem = parent.current;
    parentElem.addEventListener('input', event => {
      const regexpValue = document.querySelector('#regexp').value;
      try {
        const regexp = new RegExp('^' + regexpValue + '$');
        const neib =  event.target.nextElementSibling;
        if (regexp.test(event.target.value)) {
          neib.classList.remove('no-match')
          neib.classList.add('match')
          neib.children[0].textContent = 'Match'
        } else {
          neib.classList.remove('match')
          neib.classList.add('no-match')
          neib.children[0].textContent = 'Don\'t match'
        }
      } catch (error) {
        console.error(error);
      }
    })
  }, [])
  return (
    <div className="samples" ref={parent}>
      {samples}
    </div>
  )
}

function Input({el}) {
  // const [inputText, setInputText] = useState(el)
  return (
    <div className="sample">
      <input className="input" 
        type="text" 
        placeholder="Sample" 
        defaultValue={el} 
        // onChange={e => setInputText(e.target.value)}
        />
      <div className="answer no-match"><span>Don't match</span></div>
    </div>
  )
}