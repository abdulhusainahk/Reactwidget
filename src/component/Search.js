import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Search=()=>{
    const [term,setTerm]=useState('');
    const [results,setResult]=useState([]);
    const [debounchedTerm,setDebounce]=useState(term);

    useEffect(()=>{
        const timeid=setTimeout(()=>{
            setDebounce(term);
        },1000);
        return ()=>{
            clearTimeout(timeid);
        };
    },[term]);
    useEffect(()=>{
        const search=async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debounchedTerm
                },
            });
            setResult(data.query.search);
        };
        if(debounchedTerm){
        search();}
    },[debounchedTerm]);
    const renderedResult = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        {result.title}</a>
                    </div>
                    <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
                </div>
            </div>
        );
    });
    return(<div>
        <div className="ui form">
            <div className="field">
                <label>Enter the Search Term</label>
                <input 
                value={term}
                className="input"
                onChange={(e)=>{setTerm(e.target.value)}}/>
            </div>
        </div>
        <div className="ui celled list">
            {renderedResult}
        </div>
    </div>);
}

export default Search;