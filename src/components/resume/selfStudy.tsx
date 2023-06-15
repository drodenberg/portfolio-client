import React from 'react'
import '../../app/resume/styled.css'

interface SelfStudyProps {
  communityWork: CommunityWork;
}

interface CommunityWork {
  data: Array<ParentArray>;
}

interface ParentArray {
  id: number;
  attributes: CommunityWorkDetail;
}

interface CommunityWorkDetail {
  description: string;
  accomplishments: [AccomplishmentDetail];
}

interface AccomplishmentDetail {
  id: number;
  accomplishment: string;
}

const SelfStudy: React.FC<SelfStudyProps> = ({ communityWork }) => (
  <div className="col s12 m8 l8" style={{ float: 'right' }} >
    <div className="card-panel">
      <div className="row">

        <div className="col s12 m2 l2">
          <i className="medium material-icons">home</i>
        </div>

        <div className="col s12 m10 l10">
          <h4>Community</h4>

          {communityWork.data.map(work => (
            <>
              <p><strong>{work.attributes.description}</strong></p>
              <div className="tab">
                <ul>
                  {work.attributes.accomplishments.map(detail => (
                    <li key={detail.id} style={{ listStyleType: 'disc' }}>{detail.accomplishment}</li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default SelfStudy