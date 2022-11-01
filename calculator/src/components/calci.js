import React, {useState} from 'react'
import "./calci.css"

const Calci = () => {
    const [result, setResult] = useState("");

  const Click=( Event )=>{
    setResult(result.concat(Event.target.value))
  }
  const clearDisplay=()=>{
    setResult("");
  }
  const Equal=()=>{
    setResult(eval(result).toString());
  }
  return (
    <div className="App">
      <div className='calc'>
        <div className='calc_head'><h1>Calculator</h1></div>
        <input type="text" placeholder='' id='answer' value={result} />
        <input type="button" value="9" className="btn"  onClick={Click}/>
        <input type="button" value="8" className="btn" onClick={Click}/>
        <input type="button" value="7" className="btn" onClick={Click}/>
        <input type="button" value="6" className="btn" onClick={Click}/>
        <input type="button" value="5" className="btn" onClick={Click}/>
        <input type="button" value="4" className="btn" onClick={Click}/>
        <input type="button" value="3" className="btn" onClick={Click}/>
        <input type="button" value="2" className="btn" onClick={Click}/>
        <input type="button" value="1" className="btn" onClick={Click}/>
        <input type="button" value="0" className="btn" onClick={Click}/>
        <input type="button" value="." className="btn" onClick={Click}/>
        <input type="button" value="C" className="btn" onClick={clearDisplay}/>
        <input type="button" value="+" className="btn" onClick={Click}/>
        <input type="button" value="-" className="btn" onClick={Click}/>
        <input type="button" value="*" className="btn" onClick={Click}/>
        <input type="button" value="/" className="btn" onClick={Click}/>
        <input  type="button" value="=" className="button" onClick={Equal}/>
      </div>
    </div>
  );
}

export default Calci