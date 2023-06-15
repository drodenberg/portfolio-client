import Sidebar from '@/components/resume/sidebar'
import About from '@/components/resume/about'
import WorkHistory from '@/components/resume/workHistory'
import '../../app/globals.css'


export interface ParentArray {
  id: number;
  attributes: any;
}

interface ResumeProps {
  data: ResumeObject;
}

interface ResumeObject {
  name: string;
  currentPosition: string;
  contact: ContactInfo;
  collegeInfo: CollegeInfo;
  skills: Skills;
  community: CommunityWork;
  professionalSummary: string;
  lookingFor: string;
  workHistory: WorkHistoryProps;
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

interface CommunityWork {
  data: Array<any>;
}

interface WorkHistoryProps {
  data: Array<ParentArray>;
}

export default async function Resume({ data }: ResumeProps) {
  return (<div className="resume-container container">
    <div className="row">
      <Sidebar
        name={data.name}
        currentPosition={data.currentPosition}
        contactInfo={data.contact}
        collegeInfo={data.collegeInfo}
        skills={data.skills}
        communityWork={data.community} />

      <section className="resume">
        <About summary={data.professionalSummary} lookingFor={data.lookingFor} />
        <WorkHistory workHistory={data.workHistory} />
      </section>
    </div>
  </div>
  )
}

