import React from 'react'
import '../../app/resume/styled.css'

const About: React.FC<{ summary: string, lookingFor: string }> = ({ summary, lookingFor }) => (
  <div className="col s12 m8 l8">
    <div className="card-panel">
      <div className="row">
        <div className="col s12 m2 l2">
          <i className="medium material-icons">perm_identity</i>
        </div>

        <div className="col s12 m10 l10">
          <h4>Professional Summary</h4>

          <p>{summary}</p>
          {/* <p>{lookingFor}</p> */}
        </div>
      </div>
    </div>
  </div>
)

export default About