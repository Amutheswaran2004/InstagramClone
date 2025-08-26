import React from 'react'
import Sug_list from './Sug_list';
function Sug_Section() {
  return (
       <div className="d-flex flex-column gap-2 m-3">
        <div className="d-flex flex-row sug-slot1  gap-3 ">
            <img src="src\assets\Suit-croped.jpg" className="rounded-circle sug-pic" />
            <div className="sug-content">
            <span>Amudesh</span>
            <span className="text-secondary" id="sug-sub">-amudesh_73</span>
            </div>
            <div className="py-1">
            <a href="" id="link">switch</a>
            </div>
        </div>
        <div className="d-flex justify-content-between sug-slot2">
            <span className="text-secondary">Suggested for you</span>
            <span>Sell All</span>
        </div>
        <div className="d-flex flex-column gap-2">
        <div className='my-1'>
          <Sug_list></Sug_list>
        </div>
        <div className="sug-slot3 text-secondary">
            <div className=" d-flex flex-wrap gap-1 mt-4">
            <a href="" className="sug-footer-link">About </a><a href="" className="sug-footer-link">Help</a><a href="" className="sug-footer-link">Press</a><a href="" className="sug-footer-link">API</a><a href="" className="sug-footer-link">Jobs </a> <a href="" className="sug-footer-link">Privacy </a><a href="" className="sug-footer-link">Terms</a><a href="" className="sug-footer-link">Location</a><a href="" className="sug-footer-link">Language</a><a href="" className="sug-footer-link">Meta Verified</a>
            </div>
            <div className="my-2 sug-footer-link">
                <span>© 2025 Instagram from Meta</span>
            </div>
        </div>
 
      </div>
      </div>
  )
}

export default Sug_Section;