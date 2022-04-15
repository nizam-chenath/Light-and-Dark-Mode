
import './App.css';
import Login from "./Components/Login"
import { createContext, useState } from 'react'
import ReactSwitch from "react-switch";


export const themeContext = createContext(null)

function App() {
   const [ background, setBackgound ] = useState("light");

   const changeBg = () =>{
     setBackgound((current) => (current === "light" ? "dark" : "light"))
   }

  return (
    <themeContext.Provider value={{background, changeBg}}>

    <div className="App" id={background}>
      <Login/>
      <div className="switch">
       <label >{background === "light" ? "lightMode" : "darkMode"}</label>
      <ReactSwitch onChange={changeBg} checked={background === "light"}/>
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
