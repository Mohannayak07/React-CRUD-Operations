import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Delete(){
    let history=useHistory();
    axios.delete('http://localhost:2000/delemp')
    alert('deleted successfull..')
    history.push('/display')
}