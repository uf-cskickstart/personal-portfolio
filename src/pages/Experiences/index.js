import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './Experiences.css'
import GitHubIcon from '@mui/icons-material/GitHub';


const Experiences = () => {
  return (
    <div class="experiences">
      <h1>My Experience</h1>
      
      <div class="projectList">
        <div className='project'>
          <h1>Name</h1>
          <img src="https://placehold.co/200x200"/>
          <p>
            <b>Skills: </b> Skills
          </p>
          <GitHubIcon className='icons' onClick={() => window.open("www.google.com")}/>

        </div>
      </div>

    </div>
  )
}

export default Experiences