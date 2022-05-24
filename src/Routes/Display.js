import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import Update from "./Update";
import { useEffect,useState } from "react";

export default function Display(){
   
    // 
    const [post, setPost] = useState([]);
    const displayuser=()=>{
        axios.get('http://localhost:2000/emps')
        .then((response) => {
            setPost(response.data);
        });
    }
   

  useEffect(() => {
    displayuser()
  }, []);
  async function Delete(id){
      await axios.delete(`http://localhost:2000/delemp/${id}`)
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
                            <td><Link className="btn btn-danger" onClick={()=>Delete(ele._id)}>Delete</Link></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

    
