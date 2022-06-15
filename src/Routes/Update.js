import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { useHistory,Link} from "react-router-dom";
import { useParams } from "react-router-dom";
// import Display from "./Display";
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom' 
export default function Update(){
    const {id}=useParams();
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
    
    async function update(){
        // e.preventDefault();
        await axios.put(`http://localhost:2000/updemp/${id}`,user)
        alert('User Updated Successfully...')
            history.push('/display')
            .then(res=>{
                setUser(res.data)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    async function loaduser(){
        const res=await axios.get(`http://localhost:2000/emps/${id}`)
        setUser(res.data);
        console.log(res.data);
        
    }
    
    useEffect(()=>{
        loaduser();
    },[]);
    
    return(
        <div className="form-group">
            {/* <form onSubmit={e=>update(e)}> */}
            <div id="form">
            <input id="_id" name="_id" value={_id} type={'text'} className="form-control" placeholder="Enter Id" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="name" name="name" value={name} type={'text'} className="form-control" placeholder="enter name" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="age" name="age" value={age} type={'text'} className="form-control" placeholder="enter Age" onChange={e=>onInputChange(e)} required></input><br></br>
            <input id="email" name="email" value={email} type={'email'} className="form-control" placeholder="enter Email" onChange={e=>onInputChange(e)} required></input><br></br>
            <button type={'submit'} id="updbtn" className="btn btn-warning" onClick={update}>Update</button> &nbsp;
            <Link type={'submit'} id="updcancelbtn" className="btn btn-danger" to='/display'>Cancel</Link>
            </div>
            {/* </form> */}
        </div>
    )
}