import React from 'react'
import '../../app/resume/styled.css'

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
                  <p style={{ paddingTop: 10 }}><strong>{accomplishment.description}</strong></p>
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