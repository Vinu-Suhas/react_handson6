import React, { useContext } from "react";
import {Store} from './StoreComponents'
import { useNavigate, useParams } from "react-router-dom";

import "./Students.css";
export function EditStudent(){
    const contextData=useContext(Store)
    const index=useParams().id
    const updatedStudent={
        Name:"",
        Age:"",
        COURSE:'',
        Batch:''

        
    }
    const Navi=useNavigate()
    const handleChange=(element)=>{
        updatedStudent[element.target.name]=element.target.placeholder
    }
    const handleSubmit=()=>{
        console.log(updatedStudent)
        contextData.data[index]=updatedStudent
        Navi('/student')

    }
    // console.log(index)
    console.log(contextData.data[index]);
    return(<>
    {/* <h1>This is edit students page {index}</h1> */}
        {/* <h2>{}</h2> */}
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Name</legend>
        <input onChange={handleChange} style={{border:"0px"}} type="text"    name="Name" placeholder={contextData.data[index].Name}></input> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Age</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="number"  name="Age" placeholder={contextData.data[index].Age}/> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>COURSE</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="text"  name="COURSE" placeholder={contextData.data[index].COURSE}/> <br/>
    </fieldset>
    <fieldset style={{width:'fit-content',borderRadius:'17px',border:'1px solid black'}}>
        <legend>Batch</legend>
    <input onChange={handleChange}  style={{border:"0px"}} type="text"  name="Batch" placeholder={contextData.data[index].Batch}/> <br/>
    </fieldset>
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={()=>Navi('/student')}>Back</button>
    </>)



}