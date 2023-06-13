import React from 'react'
import '../app/globals.css'

interface SidebarProps {
  workHistory: WorkHistory;
}

interface WorkHistory {
  data: Array<ParentArray>;
}

interface ParentArray {
  id: number;
  attributes: WorkPlaces;
}

interface WorkPlaces {
  company: string;
  title: string;
  tenure: string;
  accomplishments: Array<Accomplishment>;
}

interface Accomplishment {
  id: number;
  description: string;
  accomplishment: Array<AccomplishmentDetail>;
}

interface AccomplishmentDetail {
  id: number;
  specifics: string;
}

const WorkHistory: React.FC<SidebarProps> = ({ workHistory }) => (
  <div className="col s12 m8 l8">
    <div className="card-panel">
      <div className="row">

        <div className="col s12 m2 l2">
          <i className="medium material-icons">work</i>
        </div>

        <div className="col s12 m10 l10">
          <h4>Work History</h4>
          {workHistory.data.map(workPlace => (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                <h5>{workPlace.attributes.title} @ <a href='https://divvit.co' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">{workPlace.attributes.company}</a></h5>
                <p className="highlight">{workPlace.attributes.tenure}</p>
              </div>

              {workPlace.attributes.accomplishments.map(accomplishment => (
                <>
                  <p><strong>{accomplishment.description}</strong></p>
                  <div className="tab">
                    <ul>
                      {accomplishment.accomplishment.map(detail => (
                        <li key={detail.id} style={{ listStyleType: 'disc' }}>{detail.specifics}</li>
                      ))}

                    </ul>
                  </div>
                </>
              ))}
            </>
          ))}




          {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
            <h5>Senior Full Stack Developer @ <a href='https://1904labs.com' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">1904labs</a></h5>
            <p className="highlight">Oct 2017 - Present</p>
          </div>

          <p><strong>Public-facing Rewards Web Application for Mastercard</strong></p>
          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>The application allowed consumers of a bank to see the latest offers and deals that the bank had to offer.</li>
              <li style={{ listStyleType: 'disc' }}>I was heavily involved in the design process and implementing the design using React and Typescript.</li>
              <li style={{ listStyleType: 'disc' }}>Accomplished learning Typescript and executed tasks with no delay.</li>
            </ul>
          </div>


          <p><strong>Complete rewrite of a data management system at NGA.</strong></p>

          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>This application was using legacy systems and our job was to update the usability and technology.</li>
              <li style={{ listStyleType: 'disc' }}>I was heavily involved in the design process and implementing the design on the front and back end.</li>
              <li style={{ listStyleType: 'disc' }}>Accomplished setting up the entire application using React/Parcel for the front end and Apollo JS graphql for the back end.</li>
            </ul>
          </div>



          <p><strong>React Geospatial Web Framework and Application for Bayer</strong></p>
          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>Our framework was being consumed by 11 teams with a number of different use cases. We created an api and ui for developers, to streamline the process of putting together a geospatial web app.</li>
              <li style={{ listStyleType: 'disc' }}>One of the features I worked on was an advanced time slider which allows users to look at drone imagery of a field to analyze the different images week by week.</li>
              <li style={{ listStyleType: 'disc' }}>Accomplished open sourcing our framework <a href='https://ol-kit.com' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">ol-kit</a>  through Bayer and is the most recognized repo/library</li>
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
            <h5>Engineer 1 @ Enterprise Holdings</h5>
            <p className="highlight">Jan 2015 - Sept 2017</p>
          </div>
          <p><strong>Developed and maintained a web application using Spring MVC and Angular.</strong></p>
          <div className="tab">
            <ul>
              <li style={{ listStyleType: 'disc' }}>Fleet Planning North America was used to manage the entire Enterprise fleet across the US.</li>
              <li style={{ listStyleType: 'disc' }}>This application allows three levels of managers to plan their fleet of cars throughout the year.</li>
            </ul>
          </div> */}

          {/* <h5>Software Intern @ Cerner (Kansas City)</h5>
              <p><span className="highlight">May 2012 - Aug 2014</span></p>
              <p>Developed and Implemented a web application for the ticketing system that Cerner used called Remedy.</p>
              <p>It allowed the users to view the tickets, see who was assigned to them (what group, what employee) and see the status of the ticket</p>
              <p>This was done using the .NET framework. I had no previous experience with this framework prior to the summer of 2014.</p> */}
        </div>

      </div>
    </div >
  </div >
)

export default WorkHistory


/*
<li style={{ listStyleType: 'disc' }}>Published a mobile app called <a href='https://apps.apple.com/us/app/divvit-golf/id1571822903' style={{ color: '#3379b7' }} target='_blank' rel="noopener noreferrer">Divvit Golf</a> using Flutter that is in the app store.</li>
                    <li style={{ listStyleType: 'disc' }}>Ran a charity event for Lift For Life Academy in June 2021 that raised over $7,000.</li>
                    <li style={{ listStyleType: 'disc' }}>Built out, with openlayers and stored in postGIS, over 2000 golf courses throughout the US.</li>
*/