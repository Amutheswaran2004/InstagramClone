import React from 'react'

function Sug_insta_id(props) {
  return (
            <div className="d-flex flex-row sug-slot1  gap-3 ">
            <img src={props.dp} className="rounded-circle sug-pic"></img>
            <div className="sug-content">
            <span>{props.username}</span>
            <span className="text-secondary" id="sug-sub">{props.reason}</span>
            </div>
            <div className="py-1">
            <a href="" id="link">Follow</a>
            </div>
            </div>
  )
}

export default Sug_insta_id