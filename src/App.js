import React,{useState} from "react";
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdowm from './component/Dropdown';
const items=[
    {
        title: "What is React?",
        content: "React is a front end javascript frmaework"
    },
    {
        title: "Why use React",
        content: "React is famous"
    },
    {
        title: "How to use React",
        content: " Use React by component"
    }
];
const options=[
    {
        label: "The Color Red",
        value: 'red'
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
];
export default ()=>{
    const [selected,setSelected]=useState(options[0]);
    const [visible,setVisible]=useState(true);
    return( 
    <div className="ui container">
        <button onClick={()=>{setVisible(!visible)}} 
            className="ui button">Toggle Dropdown</button>
        {visible ? 
        <Dropdowm options={options}
            selected={selected}
            onSelectChange={setSelected}/> : null
        }
        <h2><font color={selected.value}>This is current Color</font></h2>
    </div>);
}