import React,{useState,useEffect,useRef} from 'react';

const Dropdowm=({options,selected,onSelectChange,Title})=>{
    const [open,setOpen]=useState(false);
    const ref = useRef();
    useEffect(()=>{
        const onBodyClick=(event)=>{
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick,{capture: true});
        return()=>{
            document.body.removeEventListener('click',onBodyClick);
        };
    },[]);
    const renderedOption=options.map((option)=>{
        if(option.value===selected.value){
            return null;
        }
        return(
            <div 
            onClick={()=>{onSelectChange(option)}} 
            key={option.value} 
            className="item">
                {option.label}
            </div>
        );
    })
    return(
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{Title}</label>
            <div onClick={()=>{setOpen(!open)}} 
            className={`ui selection dropdown ${open ?`visible active`:''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open ?'visible transition':''}`}>
                    {renderedOption}
                </div>
            </div>
        </div>
    </div>);
}

export default Dropdowm;