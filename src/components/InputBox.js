import React, { useRef,useId } from 'react';
import './inputBoxCss.css';

export default function InputBox({
    label='temp',
    amount,
    inputDisable=false,
    currList=[],
    onAmntChng,
    currency,
    onCurrChng,
    conversion=''
}){
    const labelId=useId();
    const tempVal=useRef(null);
    return(
        <div className="inputContainer">
            <div className='labelAmntBox'>
                <label htmlFor={labelId} className='label'>{label}</label>
                <input id={labelId} type='number' disabled={inputDisable} className='inputField' placeholder='amount' value={inputDisable? conversion:amount} onChange={(e)=>onAmntChng(e.target.value)}/>
            </div>
            <div className='dropCurrBox'>
                <h3 className="currType">Currency Type</h3>
                <select ref={tempVal} className='selectCurr' value={currency} onChange={(e)=>{onCurrChng(e.target.value)}}>
                    {
                        currList.map((e,index)=>{
                            for(let i=0;i<currList.length;i++){
                                return (
                                    <option key={index} value={`${e}`}>{e}</option>
                                )
                            }
                        })
                    }
                </select>
            </div>
        </div>

        
    )
}