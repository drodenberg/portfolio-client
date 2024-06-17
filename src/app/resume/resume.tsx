import Sidebar from '@/components/resume/sidebar'
import About from '@/components/resume/about'
import WorkHistory from '@/components/resume/workHistory'
import '../../app/globals.css'


interface ResumeProps {
  data: ResumeObject;
}

export interface ResumeObject {
  name: string;
  currentPosition: string;
  skills: Array<Skills>;
  community: CommunityWork;
  professionalSummary: string;
  lookingFor: string;
  work_history: Array<WorkHistoryProps>;
  personalEmail: string;
  phoneNumber: string;
  githubLink: string;
  linkedInLink: string;
  school: string;
  degree: string;
  years: string;
  awards: string;
}

interface Skills {
  id: string
  date_created: string
  date_updated: string
  name: string
}

interface CommunityWork {
  data: Array<any>;
}

export interface WorkHistoryProps {
  id: string
  date_created: string
  date_updated: string
  company: string
  title: string
  tenure: string
  accomplishments: Array<Accomplishment>
}

interface Accomplishment {
  id: string
  date_created: string
  date_updated: string
  description: string
  accomplistments: Array<AccomplishmentExplanation>
}

interface AccomplishmentExplanation {
  id: string
  date_created: string
  date_updated: string
  explanation: string
}

export default async function Resume({ data }: ResumeProps) {
  return (
    <div className="resume-container container">
      <div className="row">
        <Sidebar {...data} />

        <section className="resume">
          <About summary={data.professionalSummary} lookingFor={data.lookingFor} />
          <WorkHistory data={data.work_history} />
        </section>
      </div>
    </div>
  )
}

