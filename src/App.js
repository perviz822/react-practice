import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import { useEffect } from 'react';
import { useState ,useMemo} from 'react';

function App() {
  const [is_clicked,set_is_clicked] =  useState(false);
  const [is_clicked2,set_is_clicked2]=  useState(false);

  const result = useMemo(()=>{
    console.log('calculating..')
    let sum = 0;
    for (let i =0;i<10000000;i++){
      sum=sum+i;
  
    }
    return sum;
  },[is_clicked2])
  useEffect(()=>{
    console.log("useEffect is used")
  },[is_clicked2]) 
  return (
    <>
    <h1>{result}</h1>
    <Component1 is_clicked2={is_clicked2} is_clicked = {is_clicked} set_is_clicked2={set_is_clicked2} set_is_clicked={set_is_clicked} />
    {is_clicked &&  <Component2/>}
    </>
  )
   
}

export default App;
