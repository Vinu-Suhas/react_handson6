import { useContext } from "react"
import { Store } from "./StoreComponents"
import { Link, useNavigate } from "react-router-dom"
import './Students.css'

export function Student(){
const contextData=useContext(Store)
const Navi=useNavigate()
console.log(contextData.data)
return(<>
<button onClick={()=>Navi('/newstudent')} >Add new Student</button>
<div className="table_container">
    <table style={{ width: "50%",   borderCollapse: "collapse"}}>
        <thead>
            <tr>

            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Change</td>
            </tr>
        </thead>
        <tbody>
            {contextData.data.map((item,index)=>{
                return(<tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Batch}</td>
                    <td>{item.COURSE}</td>
                    <td>
                        <Link to={`/editStudent/${index}`}>Edit</Link>
                    </td>
                </tr>)

            })
        }
        

        </tbody>

    </table>
    </div>
    </>)
    }