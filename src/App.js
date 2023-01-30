import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import { useCallback, useEffect } from 'react';
import { useState ,useMemo} from 'react';
import ParentComponent from './Components/UseCallback';
import Contact from './Components/Contact';
import {Link,Route,Routes} from 'react-router-dom';
import About from  './Components/About'

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
    <Routes>
     <Route path = "/contact" element ={<Contact/>} />  
    <Route path = "/about/*" element ={<About/>} />
   </Routes>
    <h1>{result}</h1>
    <Link to="/contact"> contact</Link>
    <Link to='/about'>about</Link>
    <Component1 is_clicked2={is_clicked2} is_clicked = {is_clicked} set_is_clicked2={set_is_clicked2} set_is_clicked={set_is_clicked} />
    {is_clicked &&  <Component2/>}

    <ParentComponent></ParentComponent>
   


    
    </>
  )
   
}

export default App;
