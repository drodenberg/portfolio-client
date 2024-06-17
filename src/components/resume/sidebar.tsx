import React from 'react'
import headshot from '../../../public/danheadshot-wide.jpg'
import Image from 'next/image'
import '../../app/resume/styled.css'
import SelfStudy from './selfStudy';
import { ResumeObject } from '@/app/resume/resume';

interface SidebarProps {
  data: ResumeObject
}

interface ContactInfo {
  personalEmail: string;
  phoneNumber: string;
  githubLink: string;
  linkedInLink: string;
}

interface CollegeInfo {
  school: string;
  degree: string;
  years: string;
  awards: string;
}

interface Skills {
  data: Array<ParentArray>;
}

interface ParentArray {
  id: number;
  attributes: Skill;

}

interface Skill {
  name: string,
  proficiencyPercentage: number;
}

interface CommunityWork {
  data: Array<ParentArrayCW>;
}

interface ParentArrayCW {
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

const Sidebar: React.FC<ResumeObject> = ({ name, personalEmail, phoneNumber, githubLink, currentPosition, linkedInLink, degree, school, awards, years, skills, community }) => (
  <div className='col s12 m4 l4'>
    <div className='card sideBar'>

      <div className='card-image'>
        <Image alt='daniel_rodenberg' src={headshot} fill className="custom-img" />
        <span id='cardTitle' className='card-title'>{name}</span>
        <span id='cardSubTitle' className='card-title'>{currentPosition}</span>
      </div>

      <div className='card-content'>
        <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>contact_phone</i>
          </div>
          <div className='col s8 m10 l10'>

            <h5>Contact</h5>
            <ul className='list-unstyled'>
              <li>{personalEmail}</li>
              <li>{phoneNumber}</li>
              <li><a href={githubLink} target='_blank' rel="noopener noreferrer">github.com/drodenberg</a></li>
              <li><a href={linkedInLink} target='_blank' rel="noopener noreferrer">@d_rode92</a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>import_contacts</i>
          </div>
          <div className='col s8 m10 l10'>
            <h5>Education</h5>
            <p className='degree'>{degree}</p>
            <p className='meta'>{school}</p>
            <p>{awards}</p>
            <p>{years}</p>
          </div>
        </div>

        <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>trending_up</i>
          </div>
          <div className='col s8 m10 l10 '>
            <h5>Skills & Proficiency</h5>

            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <span key={skill.id} className="py-2 px-4 shadow-md no-underline rounded-full bg-white text-[#337ab7] font-sans font-semibold text-sm mr-2 mt-2">{skill.name}</span>
                // <>
                //   <span>{skill.attributes.name}</span>
                //   <div className='progress'>
                //     <div className='determinate' style={{ width: `${skill.attributes.proficiencyPercentage}%` }}></div>
                //   </div>
                // </>
              ))}
            </div>

          </div>
        </div>

        {/* <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>home</i>
          </div>
          <div className='col s8 m10 l10'>
            <h5>Community</h5>
            {communityWork.map(work => (
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
                    </div>*/}
      </div>

      {/* <SelfStudy /> */}



    </div>
  </div>

)

export default Sidebar