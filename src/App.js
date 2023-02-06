import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  const [mod, setMod] = useState("dark");


  let togglemode = () => {
    if (mod === "dark") {
      setMod("light");
    } else {
      setMod("dark");
    }
  }


  return (
    <Router>
      <Navbar title="Text-Count" aboutText="About" mod={mod} togglemode={togglemode} />
      <Switch>
        <Route exact path="/">
          <TextForm togglemode={mod} mod={mod}/>
        </Route>
        <Route exact path="/about">
          <About togglemode={mod} mod={mod}/>
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
