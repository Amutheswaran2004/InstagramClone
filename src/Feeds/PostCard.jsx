import React from 'react'

function PostCard(props) {
  return (
        <div className="card1">
         <div className="position-relative slot1">
            <img className="rounded-circle db" src={props.dp} ></img>
            <span>{props.username}</span>
            <i className="bi bi-three-dots"></i>
         </div>
         <div className="post-div">
            <img src={props.image} className="post-pic"></img>
         </div>
         <div className="slot2 position-relative">
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
            <i className="bi bi-bookmark"></i>
         </div>
         <div className="">
            <p className="fs-6 fw-semibold mb-1 mx-1">{props.likes} likes</p>
        </div>
         <div className="mt-0 p-0 d-flex ">
            <span className="fw-semibold fs-6 mx-1">{props.username}</span>
            <p>{props.caption}</p>
         </div>
    </div>
  )
}

export default PostCard