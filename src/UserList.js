import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from'./UserCard'
function UserList() {
    const [listOfUser,setListOfUser]=useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setListOfUser(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div style={{display:'flex',
    justifyContent:'centre',
    flexWrap:'wrap',
    padding: '20px',
    borderradius: '2%',
    margin:'10% 10%'}}>

        {listOfUser.map (user=><UserCard user={user} key={user.id}/> )}
    
    </div>
  )
}

export default UserList;