import React from 'react'
import { useState,useEffect } from 'react';
import Story_feed from './Story_feed';
import Story_design from './Story_design';

function Stories() {
  const [stories,setStories]=useState([]);
  const[error,setError]=useState('');

  useEffect(()=>{
    fetch("http://localhost:3000/list").then(data=>data.json()).then((data)=>setStories(data)).catch((error)=>{setError(error.message)})
  },[])
  
  if(stories.length==0){
    return<>{error}</>
  }

  let load = stories.map((post)=>{
    console.log(post.username)
    return(
      <Story_feed username={post.username} id={post.id} dp={post.profilePic}/>
    )
  })

  return (
    <div className='d-flex flex-row gap-3 p-1  ' id="stories" aria-label="Stories">{load}</div>
  )
}

export default Stories