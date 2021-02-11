import React,{useState} from "react";
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdowm from './component/Dropdown';
import Translate from './component/Translate';
import Header from './component/Header';
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
const Dropdown=()=>{
    const [selected,setSelected]=useState(options[0]);
    const [visible,setVisible]=useState(true);
    return( 
    <div>
        <button onClick={()=>{setVisible(!visible)}} 
            className="ui button">Toggle Dropdown</button>
        {visible ? 
        <Dropdowm options={options}
            selected={selected}
            onSelectChange={setSelected}
            Title={"Select a Color"}/> : null
        }
        <h2><font color={selected.value}>This is current Color</font></h2>
    </div>);
}
const Navigate=()=>{
    const path=window.location.pathname
    if(path==='/'){
        return <Accordion items={items}/>
    }
    else if(path==='/translate'){
        return <Translate/>
    }
    else if(path==='/dropdown'){
        return Dropdown();
    }
    else if(path==='/search'){
        return <Search/>        
    }
}
export default ()=>{
    return(<div className="ui container">
        <Header/>
       {Navigate()}
    </div>);

}