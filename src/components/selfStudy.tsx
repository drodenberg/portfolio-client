import React from 'react'

const SelfStudy = () => (
  <div className="col s12 m8 l8" style={{ float: 'right' }} >
    <div className="card-panel">
      <div className="row">

        <div className="col s12 m2 l2">
          <i className="medium material-icons">home</i>
        </div>

        <div className="col s12 m10 l10">
          <h4>Community</h4>


          <p><strong>Lift For Life Academy</strong></p>
          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>Volunteer for 1904labs coders program, teaching middle schoolers to code using MITs app inventor 2.</li>
              <li style={{ listStyleType: 'disc' }}>Lead weekly coding workshops at Lift For Life Academy, empowering students to develop their problem-solving and critical thinking skills.</li>
            </ul>
          </div>

          <p><strong>Flutter Health</strong></p>
          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>Contributing to a flutter library called Flutter Health, helping to develop a tool for tracking health metrics on mobile devices.</li>
              <li style={{ listStyleType: 'disc' }}>Collaborate with other developers in the open-source community to improve the functionality and usability of the library.</li>
            </ul>
          </div>

          {/* <p>Joined a program introducing middle schoolers to code</p>
              {/* <p>Read Scripture: This is a private project that I recently got invited to. It's a react-native app that is a bible reading plan that has thousands of users.</p> */}
          {/* <p>Contributed to a flutter library. <a href='https://pub.dev/packages/health' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">flutter health</a> </p> */}
        </div>

      </div>
    </div>
  </div>
)

export default SelfStudy