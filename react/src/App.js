import React from "react";
import "./App.css";
import Greet from "./components/Greet"



const App = () => {
    return (
        <>
            <Greet name="Bruce" heroName="Batman" />
            <Greet name="Clark" heroName="Superman" />
            <Greet name="Diana" heroName="Wonder Woman" />
        </>
    )
}

export default App;