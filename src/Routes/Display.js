import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import Update from "./Update";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Display(){
   
    const history=useHistory()
    const [post, setPost] = useState([]);
    
    const displayuser=()=>{
        axios.get('http://localhost:2000/emps')
        .then((response) => {
            setPost(response.data);
        });
    }
   
 const toastmessage=()=>{
    toast.success('Deleted successfully')
 }
  useEffect(() => {
    displayuser()
  }, []);
  async function deleteuser(id){
    // const history=useHistory()
      await axios.delete(`http://localhost:2000/delemp/${id}`)
      toastmessage()
    //   alert('user deleted..')
      console.log('delete user');
      displayuser();
      
      
  }   


        return(
            <div>
                <h1>Welcome to display page...</h1><br></br>
                <table className="table table-dark">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {post.map((ele,index)=>{
                        return <tr>
                            <td>{ele._id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.email}</td>
                            <td><Link className="btn btn-warning" to={`/updemp/${ele._id}`}>Edit</Link></td>
                            <td><button className="btn btn-danger" onClick={()=>deleteuser(ele._id)}>Delete</button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        )
    }

    
