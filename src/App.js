import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [is_clicked,set_is_clicked] =  useState(false);
  return (
    <>
    <Component1 is_clicked = {is_clicked} set_is_clicked={set_is_clicked} />
    {is_clicked &&  <Component2/>}
    </>
  )
   
}

export default App;
