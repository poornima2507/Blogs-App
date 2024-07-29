import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data,setData] = useState(
        {"Message":"","userId":sessionStorage.getItem("userId")}
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/add",data,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                        alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">POST A MESSAGE</label>
                            <textarea name="Message" id="" className="form-control" value={data.Message} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark" onClick={readValue}>POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add