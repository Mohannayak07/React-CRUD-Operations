import React from "react";
import axios from "axios";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import Display from "./Display";
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
export default function Insert(){
    let history=useHistory();
    const[user,setUser]=useState({
        "_id":"",
        "name":"",
        "age":"",
        "email":""
    })
    const {_id,name,age,email}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    async function add(){
        await axios.post('http://localhost:2000/addemp',user)
        alert('User Inserted Successfully...')
        history.push('/display')
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    }
    return(
        <div className="form-group">
            <div id="form">
            <input id="_id" name="_id" value={_id} type={'number'} className="form-control" placeholder="enter Id" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="name" name="name" value={name} type={'text'} className="form-control" placeholder="enter name" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="age" name="age" value={age} type={'text'} className="form-control" placeholder="enter Age" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="email" name="email" value={email} type={'email'} className="form-control" placeholder="enter Email" onChange={e=>onInputChange(e)} required></input><br></br>
            <button type={'submit'} onClick={add} id="insertbtn" className="btn btn-primary">Insert</button> &nbsp;
            <button type={'submit'} id="cancelbtn" className="btn btn-danger" onClick={Display}>Cancel</button>
            </div>
        </div>
    )
}