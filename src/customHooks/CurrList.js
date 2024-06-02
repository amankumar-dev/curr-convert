import React, { useEffect, useState } from "react";

const url='https://api.frankfurter.app/currencies'
export default function useCurrencies(){
    const [list,setList]=useState([]);

    async function datashown(){
        try{
            const result=await fetch(url)
            const data=await result.json();
            setList(Object.keys(data));
        }catch(e){
            console.log('error: ',e);
        }
    }

    useEffect(()=>{
        datashown();
    },[])

    return list;
}