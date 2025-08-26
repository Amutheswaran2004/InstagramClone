import React from 'react'

function Menu() {
  return (
<div className='menu-div d-flex flex-column justify-content-between m-2'>
  <div className='d-flex flex-column gap-3'>
    <img src='src\assets\text_logo.png' id='textLogo' className='mb-2 mt-2' />
    <div className='menu-btn p-1'><i className="bi bi-house-door-fill"></i>Home</div>
    <div className='menu-btn p-1'><i className="bi bi-search"></i>Search</div>
    <div className='menu-btn p-1'><i className="bi bi-compass"></i>Explore</div>
    <div className='menu-btn p-1'><i className="bi bi-play-btn"></i>Reels</div>
    <div className='menu-btn p-1'><i className="bi bi-send-fill"></i>Message</div>
    <div className='menu-btn p-1'><i className="bi bi-heart-fill"></i>Notifications</div>
    <div className='menu-btn p-1'><i className="bi bi-plus-square"></i>Create</div>
    <div className='menu-btn p-1'><i className="bi bi-person-circle"></i>Profile</div>
  </div>

  <div className='d-flex flex-column gap-3 mb-3'>
    <div className='menu-btn p-1'><i className="bi bi-threads"></i>Threads</div>
    <div className='menu-btn p-1'><i className="bi bi-list"></i>More</div>
  </div>
</div>

  )
}

export default Menu