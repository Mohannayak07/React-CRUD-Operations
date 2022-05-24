import React from "react"
export default function Login(){
    return(
        <div className="form-group">
            <input id="email" type={'text'} className="form-control" placeholder="enter name"></input><br></br>
            <input id="pass" type={'password'} className="form-control" placeholder="enter password"></input><br></br>
            <button type={'submit'} className="btn btn-primary" onClick={Login}>Login</button> &nbsp;
            <button type={'submit'} className="btn btn-danger" onClick={Register}>Register</button>

        </div>
    )
}
export function Register(){
    return(
        <div className="form-group">
            <input id="name" type={'text'} className="form-control" placeholder="enter name"></input><br></br>
            <input id="mobile" type={'text'} className="form-control" placeholder="enter mobile"></input><br></br>
            <input id="pass" type={'password'} className="form-control" placeholder="enter password"></input><br></br>
            <button type={'submit'} className="btn btn-primary" onClick={Login}>Login</button>
            <button type={'submit'} className="btn btn-danger" onClick={Register}>Register</button>

        </div>
    )

}