import React from 'react'
import { useState,useEffect } from 'react';
import Sug_insta_id from './Sug_insta_id';

function Sug_list() {
  const [list,setList]=useState([]);
  const[error,setError]=useState('');

  useEffect(()=>{
    fetch("http://localhost:3000/suggestions").then(data=>data.json()).then((data)=>setList(data)).catch((err)=>{setError(err.message)})
  },[])
  

  let load = list.map((sug)=>{
    console.log(sug.imageUrl)
    return(
      <Sug_insta_id username={sug.username} id={sug.id} dp={sug.profilePic}  reason={sug.reason} />
    )

  })
  return (
    <div className='d-flex flex-column'>{load}</div>
  )
}


export default Sug_list