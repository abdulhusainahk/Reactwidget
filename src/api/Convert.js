import React,{useState,useEffect} from 'react';
import  axios from 'axios';
const TranslateApi='AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert=({text,language})=>{
    const [translated,setTranslate]=useState('');
    const [debounchedText,setDebounceText]= useState(text);
    useEffect(()=>{
        const timerid=setTimeout(()=>{
            setDebounceText(text);
        },500);
        return()=>{
            clearTimeout(timerid);
        };
    },[text]);
    useEffect(()=>{
        const doTranslate= async()=>{
            const { data }= await axios.post('https://translation.googleapis.com/language/translate/v2',
            {},{
                params:{
                    q: debounchedText,
                    target: language.value,
                    key: TranslateApi
                }
            });
        setTranslate(data.data.translations[0].translatedText);
        };
        doTranslate();
    },[debounchedText,language]);
    return(
        <div>
            <h1 className="ui header"> {translated} </h1>
        </div>
    );
}

export default Convert;
