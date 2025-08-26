import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

function Posts() {
  const [list,setList]=useState([]);
  const[error,setError]=useState('');

  useEffect(()=>{
    fetch("http://localhost:3000/list").then(data=>data.json()).then((data)=>setList(data)).catch((error)=>{setError(error.message)})
  },[])
  
  if(list.length==0){
    return<>{error}</>
  }

  let load = list.map((post)=>{
    console.log(post.imageUrl)
    return(
      <PostCard username={post.username} id={post.id} image={post.imageUrl} likes={post.likes} caption={post.caption} dp={post.profilePic}/>
    )
  })
  return (
    <div className='d-flex align-items-center flex-column gap-2 '>{load}</div>
  )
}

export default Posts