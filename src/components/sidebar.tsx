import React from 'react'
import headshot from '../../public/danheadshot-wide.jpg'
import Image from 'next/image'

interface SidebarProps {
  contactInfo: ContactInfo;
  collegeInfo: CollegeInfo;
  name: string;
  currentPosition: string;
  skills: Skills;
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

const Sidebar: React.FC<SidebarProps> = ({ contactInfo, collegeInfo, name, currentPosition, skills }) => (
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
              <li>{contactInfo.personalEmail}</li>
              <li>{contactInfo.phoneNumber}</li>
              <li><a href={contactInfo.githubLink} target='_blank' rel="noopener noreferrer">github.com/drodenberg</a></li>
              <li><a href={contactInfo.linkedInLink} target='_blank' rel="noopener noreferrer">@d_rode92</a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>import_contacts</i>
          </div>
          <div className='col s8 m10 l10'>
            <h5>Education</h5>
            <p className='degree'>{collegeInfo.degree}</p>
            <p className='meta'>{collegeInfo.school}</p>
            <p>{collegeInfo.awards}</p>
            <p>{collegeInfo.years}</p>
          </div>
        </div>

        <div className='row'>
          <div className='col s4 m2 l2'>
            <i className='small material-icons iconPadding'>trending_up</i>
          </div>
          <div className='col s8 m10 l10'>
            <h5>Skills & Proficiency</h5>

            {skills.data.map((skill) => (
              <>
                <span>{skill.attributes.name}</span>
                <div className='progress'>
                  <div className='determinate' style={{ width: `${skill.attributes.proficiencyPercentage}%` }}></div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>

)

export default Sidebar