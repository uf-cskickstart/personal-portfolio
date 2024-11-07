import React from 'react'
import './Experiences.css'
import image from '../../images/proj1.jpg'


const Experiences = () => {
  return (
    <div class="experience">
      <h1>My Experience</h1>
      
      <div class="experienceList">
        {/* TODO: Update experience items. Add more if you need to! */}
        <div class="experienceItem">
          <div style={{backgroundImage: `url(https://placehold.co/600x400)`}} className='bgImage'/>
          <div>
            <h1>Position 1</h1>
            <p>Dates</p>
          </div>
        </div>
        <div class="experienceItem">
          <div style={{backgroundImage: `url(https://placehold.co/600x400)`}} className='bgImage'/>
          <div>
            <h1>Position 2</h1>
            <p>Dates</p>
          </div>
        </div>
        <div class="experienceItem">
          <div style={{backgroundImage: `url(https://placehold.co/600x400)`}} className='bgImage'/>
          <div>
            <h1>Position 3</h1>
            <p>Dates</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experiences