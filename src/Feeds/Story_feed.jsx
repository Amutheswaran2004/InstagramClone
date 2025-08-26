import React from 'react'

function Story_feed(props) {
  return (
    <div>
             <a className="story" href="#">
              <span className="ring">
              <img src={props.dp}/>
              </span>
              <span >{props.username}</span>
              </a>
    </div>

  )
}

export default Story_feed