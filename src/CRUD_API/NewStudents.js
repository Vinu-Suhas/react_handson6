import React, { useContext } from "react";
import {Store} from './StoreComponents'
import { useNavigate } from "react-router-dom";

export function NewStudent(){

    const Navi=useNavigate()
    const contextData=useContext(Store)
    const index=contextData.data.length+1
    const updatedStudent={
        Name:"",
        Age:"",
        COURSE:'',
        Batch:''

        
    }

    const handleChange=(element)=>{
        updatedStudent[element.target.name]=element.target.value
    }
    const handleSubmit=()=>{
        console.log(updatedStudent)
        contextData.data[index]=updatedStudent
        Navi('/student')

    }
    // console.log(DataContext)
return(<>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Name</legend>
        <input onChange={handleChange} style={{border:"0px"}} type="text"    name="Name" ></input> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Age</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="number"  name="Age" /> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>COURSE</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="text"  name="COURSE" /> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Batch</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="text"  name="Batch" /> <br/>
    </fieldset>
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={()=>Navi('/student')}>Back</button></>)
}