import React from 'react'
import Menu from './Menu.jsx'
import Feeds from './Feeds/Feeds.jsx'
import Sug_list from './Suggestions/Sug_list.jsx'
import Sug_insta_id from './Suggestions/Sug_insta_id.jsx'
import Sug_Section from './Suggestions/Sug_Section.jsx'
function App() {
  return (
    <div className='d-flex'>
  <div className='w-20 sidebar'>
    <Menu />
  </div>
  <div className='w-50'>
    <Feeds />
  </div>
  <div className='w-30'>
    <Sug_Section></Sug_Section>
  </div>
</div>

    
  )
}

export default App