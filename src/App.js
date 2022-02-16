import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react'

function App() {

  const [a, setA] = useState ();
  const [b, setB] = useState ();
  const [c, setC] = useState ();
  const [aInput, setAInput] = useState ();
  const [bInput, setBInput] = useState ();
  const [cInput, setCInput] = useState ();
  const [value, setValue] = useState ();
  
 
  useEffect (() => {
    if (aInput !== ''){
        setA(aInput)
    } 
    if (bInput !== ''){
      setB(bInput)
    }
    if (cInput !== ''){
      setC(cInput)
    } 

  })

  
  const sum = (a,b,c) => {

    if ( aInput == '' || bInput == ''  || cInput == '') {
      // console.log(a + '' + b + '' + c)
      setValue('Missing parameter')
    
    } else {
      // console.log('Missing parameter') 
      const total = Number(a) + Number(b) + Number(c);
      setValue('VALUE: ' + total)
      console.log(total)
    } 

  }
  


  return (
    <div>
      <center>
      <h1>Sum Function</h1>
      <input type='number'onChange={(e) => setAInput(e.target.value)} ></input> 
      <br/>
      <input type='number' onChange={(e) => setBInput(e.target.value)} ></input> 
      <br/>
      <input type='number' onChange={(e) => setCInput(e.target.value)}></input> 
      <br/><br/>
      <button onClick={()=> sum(a, b, c)}>GET SUM </button>

      <div>
        <p>{value}</p> <br/>
      </div>
     

      <div>
        <h4>Stored Values: </h4>
        <p>Value of A = {a}</p>
        <p>Value of B = {b}</p>
        <p>Value of C = {c}</p>
      </div>
      
      </center>
    </div>
  );
}

export default App;