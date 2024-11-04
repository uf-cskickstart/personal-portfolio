import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="intro">

        {/* TODO: Add a headline */}
        {/* <h2>Text Here<h2> */}

        <div className="prompt">
          {/* TODO: Add a one-liner about you */}
          {/* <h3>Text Here</h3> */}

          {/* TODO: Update URLs */}
          <LinkedInIcon onClick={() => window.open('https://www.google.com/')}/>
          <GitHubIcon onClick={() => window.open('https://www.google.com/')}/>
          <EmailIcon onClick={() => window.location = 'mailto:janedoe@gmail.com'}/>
        </div>

      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Technologies</h2>
            {/* TODO: Add technologies here */}
          </li>
          <li className="item">
            <h2>Coursework</h2>
            {/* TODO: Add coursework here */}
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home