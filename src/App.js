import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [a, setA] = useState ();
  const [b, setB] = useState ();
  const [c, setC] = useState ();
  const [value, setValue] = useState ();

  const sum = (a,b,c) => {
   
    if ( a == '' || b == ''  || c == '') {
      // console.log(a)
      // console.log(b)
      // console.log(c)
      // console.log('Missing parameter') 
      setValue('Missing parameter')
    } else {
      const total = Number(a) + Number(b) + Number(c);
      setValue(total)

      console.log(c)
    } 
    
  }
  // console.log(a)
  // console.log(b)
  // console.log(c)

  return (
    <div>
      <center>
      <p>Sum Function</p>
      <input type='number'onChange={(e) => setA(e.target.value)} ></input> 
      <br/>
      <input type='number' onChange={(e) => setB(e.target.value)} ></input> 
      <br/>
      <input type='number' onChange={(e) => setC(e.target.value)}></input> 
      <br/><br/>
      <button onClick={()=> sum(a, b, c)}>GET SUM </button>

      <p>{value}</p>
      </center>
    </div>
  );
}

export default App;