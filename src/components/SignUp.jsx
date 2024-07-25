import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [data,setData] = useState(
        {
        
            "name":"",
            "dob":"",
            "gender":"",
            "email":"",
            "pass":"",
            "conpass":""
        }
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue = () =>{
        if(data.pass==data.conpass){
            alert("Password and confirm password same")
        
        console.log(data)
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/add")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
    }
    else{
        alert("error in password")
    }
}
    
    let navigate = useNavigate()
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">FULL NAME</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} placeholder='fullname' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" id="" className="form-control" name="dob" value={data.dob} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">GENDER</label>
                                <input type="text" className="form-control" name="gender" value={data.gender} onChange={inputHandler} placeholder='gender' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL ID</label>
                                <input type="email"  id="" className="form-control" name="email" value={data.email} onChange={inputHandler} placeholder='email' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" id="" className="form-control" name="pass" value={data.pass} onChange={inputHandler} placeholder='password' />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password"  id="" className="form-control" name="conpass" value={data.conpass} onChange={inputHandler} placeholder='confirm password' />
                            </div>
                            <center>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>REGISTER</button>
                            </div>
                            </center>
                        </div>
                        <br/>
                    <center>
                    <p>Back to Login<Link to="/">Login</Link></p>
                    </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp