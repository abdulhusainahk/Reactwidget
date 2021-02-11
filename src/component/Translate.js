import React,{useState} from 'react';
import Dropdowm from './Dropdown';
import Convert from "../api/Convert";

const options=[
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'German',
        value: 'de'
    }
]

const Translate=()=>{
    const [language,setLanguage]=useState(options[0]);
    const [text,setText]=useState('');
    return(<div className="ui container">
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input  value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
        </div>
        <Dropdowm options={options}
        selected={language}
        onSelectChange={setLanguage}
        Title={"Select a Language"}/>
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert 
        text={text}
        language={language}/>
    </div>);
}
export default Translate;