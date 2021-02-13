import React,{useState} from "react";
import Accordion from './component/Accordion';
import Search from './component/Search';
import Dropdown from './component/Dropdown';
import Translate from './component/Translate';
import Header from './component/Header';
import Route from './component/Route';
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
const Drop=()=>{
    const [selected,setSelected]=useState(options[0]);
    const [visible,setVisible]=useState(true);
    return( 
    <div>
        <button onClick={()=>{setVisible(!visible)}} 
        className="ui button">Toggle Dropdown</button>
        {visible ? 
        <Dropdown options={options}
            selected={selected}
            onSelectChange={setSelected}
            Title={"Select a Color"}/> : null
        }
        <h2><font color={selected.value}>This is current Color</font></h2>
    </div>);
}

export default ()=>{
    return(<div className="ui container">
        <Header/>
        <Route path='/'><Accordion items={items}/></Route>
        <Route path='/translate'><Translate/></Route>
        <Route path='/dropdown'>{Drop()}</Route>
        <Route path='/search'><Search/></Route>
    </div>);

}