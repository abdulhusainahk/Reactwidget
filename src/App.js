import React from "react";
import Accordion from './component/Accordion';
import Search from './component/Search';
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
]
export default ()=>{
    return( 
    <div>
       <Search/>
    </div>);
}