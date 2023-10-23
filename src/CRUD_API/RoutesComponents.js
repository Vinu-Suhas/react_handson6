import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Student } from "./Student";
import { Contacts } from "./Contact";
import { Store } from "./StoreComponents";
import { EditStudent } from "./EditStudent";
import './RouterCompo.css'

export function RouterComponents() {
  // const Navi=useNavigate()
  const [studentData, setStudentData] = useState([
    {
      Name: "Alex",
      Age: 22,
      COURSE: "MERN",
      Batch: "October",
    },
    {
      Name: "Jane",
      Age: 25,
      COURSE: "MEAN",
      Batch: "November",
    },
    {
      Name: "Peter",
      Age: 30,
      COURSE: "MEVN",
      Batch: "December",
    },
    {
      Name: "Alice",
      Age: 22,
      COURSE: "MERN",
      Batch: "January",
    },
    {
      Name: "Bob",
      Age: 27,
      COURSE: "MEAN",
      Batch: "February",
    },
    {
      Name: "Carol",
      Age: 32,
      COURSE: "MEVN",
      Batch: "March",
    },
    {
      Name: "David",
      Age: 23,
      COURSE: "MERN",
      Batch: "April",
    },
    {
      Name: "Emily",
      Age: 28,
      COURSE: "MEAN",
      Batch: "May",
    },
    {
      Name: "Frank",
      Age: 33,
      COURSE: "MEVN",
      Batch: "June",
    },
    {
      Name: "George",
      Age: 24,
      COURSE: "MERN",
      Batch: "July",
    },
    {
      Name: "Helen",
      Age: 29,
      COURSE: "MEAN",
      Batch: "August",
    },
    {
      Name: "Ivan",
      Age: 34,
      COURSE: "MEVN",
      Batch: "September",
    },
    {
      Name: "James",
      Age: 25,
      COURSE: "MERN",
      Batch: "October",
    },
    {
      Name: "Kate",
      Age: 30,
      COURSE: "MEAN",
      Batch: "November",
    },
    {
      Name: "Leo",
      Age: 35,
      COURSE: "MEVN",
      Batch: "December",
    },
    {
      Name: "Mary",
      Age: 26,
      COURSE: "MERN",
      Batch: "January",
    },
    {
      Name: "Noah",
      Age: 31,
      COURSE: "MEAN",
      Batch: "February",
    },
    {
      Name: "Oliver",
      Age: 36,
      COURSE: "MEVN",
      Batch: "March",
    },
    {
      Name: "Penelope",
      Age: 27,
      COURSE: "MERN",
      Batch: "April",
    },
    {
      Name: "Quentin",
      Age: 32,
      COURSE: "MEAN",
      Batch: "May",
    },
    {
      Name: "Robert",
      Age: 37,
      COURSE: "MEVN",
      Batch: "June",
    },
  ]);
  return (
    <>
      <BrowserRouter>
      <div className='NavBar'>
            <ul>
                <Link  to='/'><li>Home</li></Link>
                <Link to='/student'><li>Student</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
                
            </ul>
        </div>
  
        <Routes>
          <Route path="/" element={<Home />}/>
     
          
            <Route path="/student" element={<Store.Provider value={{data: studentData,setData:setStudentData}}> <Student/> </Store.Provider>}/>        
            
         
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/editStudent/:id" element={<Store.Provider value={{data: studentData,setData:setStudentData}}><EditStudent/> </Store.Provider>}/>
           
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
