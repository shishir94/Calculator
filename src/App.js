import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState('');
  const [result,setResult] = useState('')

  const handleOnClick =(event)=>{
    setResult('');
    setData(data+event.target.value);
  }

  const handleDelete = ()=>{
    const new_data = data.slice(0,-1);
    setData(new_data);
    setResult('');
  }

  const handleClear = ()=>{
    setData('');
    setResult('');
  }

  const handleResult =() =>{
    const expression = data;
    const res = eval(expression);
    setResult(res);
  }
  
  return (
    <div className="calculator-screen">
      <div className="heading">Basic Calculator</div>
      <div className="screen">
        <input type='text' value={data} className="input" readOnly />
      </div>
      <div className="screen">
        <input type='text' value={result} className="input" readOnly />
      </div>
      <div className="display-buttons">
        <div className="button-row"> 
          <button onClick={handleClear}>Clear </button> 
          <button onClick={handleDelete}>Delete </button>
          <button onClick={handleOnClick} value={'.'}>.</button>
          <button onClick={handleOnClick} value={'/'}>/</button>
        </div>
        <div className="button-row"> 
          <button onClick={handleOnClick} value={'7'}>7</button> 
          <button onClick={handleOnClick} value={'8'}>8</button>
          <button onClick={handleOnClick} value={'9'}>9</button>
          <button onClick={handleOnClick} value={'*'}>*</button>
        </div>
        <div className="button-row"> 
          <button onClick={handleOnClick } value={'4'}>4</button> 
          <button onClick={handleOnClick} value={'5'}>5</button>
          <button onClick={handleOnClick} value={'6'}>6</button>
          <button onClick={handleOnClick} value={'-'}>-</button>
        </div>
        <div className="button-row"> 
          <button onClick={handleOnClick} value={'1'}>1</button> 
          <button onClick={handleOnClick} value={'2'}>2</button>
          <button onClick={handleOnClick} value={'3'}>3</button>
          <button onClick={handleOnClick} value={'+'}>+</button>
        </div>
        <div className="button-row"> 
          <button onClick={handleOnClick} value={'0'}>0</button> 
          <button onClick={handleResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
