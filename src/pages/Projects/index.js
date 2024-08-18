import React from 'react'
import { ProjectList } from '../../data/ProjectList.js'
import ProjectItem from '../../components/ProjectItem/index.js'
import './Projects.css'

const Projects = () => {
  return (
    <div className = "projects">
      <h1>My Projects</h1>
      <div className='projectList'>
        {/* TODO: Explain what this does. Be sure to look at components/ProjectItem as well! */}
         {ProjectList.map((item, index) => {
            return <ProjectItem id ={index} title={item.name} image={item.image}/>
         })}
      </div>
    </div>
  )
}

export default Projects