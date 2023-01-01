import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {

    const [entertexthandler, setEntertexthandler] = useState('');
    const [arrayhandler, setArrayhandler] = useState([]);

    const input_handler = (e) => {
        setEntertexthandler(e.target.value)
        // console.log(e.target.value)
    }

    const submit_handler = (e) =>{
        // e.preventDefault();
        setArrayhandler((oldarray) =>{
            return [...oldarray, entertexthandler]
        })
    }

    return (
        <>
            <div className="container">
                <div className="input">
                    <label htmlFor="Enter text" className="input_label">Enter Somthing..</label>
                    <input type="text" name="" id="" className="input_feild" onChange={input_handler} />
                    <button onClick={submit_handler}>Add</button>
                </div>
                <div className="text_place">{arrayhandler.map((text_value) =>{
                    return (<li>{text_value}</li>)
                }
                )}</div>
            </div>
        </>
    );
}

export default App;