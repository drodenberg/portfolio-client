import { WorkHistoryProps } from "@/app/resume/resume"
import { workHistorySort } from "../resume/workHistory"

interface WorkHistoryCompProps {
  data: Array<WorkHistoryProps>
}

const Resume: React.FC<WorkHistoryCompProps> = (data) => {
  const workHistory = data.data.sort(workHistorySort)

  return (
    <section id="education" className="pt-[120px] bg-white relative z-10">
      <div className="container">
        <div className="border-b border-[#E9ECF8] pb-[70px]">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="max-w-[600px] mx-auto text-center mb-[50px]">
                <span className="font-semibold text-lg text-primary block mb-2"> Education & Experience </span>
                <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">My Resume</h2>
                <p className="font-medium text-lg text-body-color">This is the history of where I went to school and where Ive worked.</p>
              </div>
            </div>
          </div>

          <div className="relative pt-12">
            <span className="absolute top-0 block left-2 lg:left-1/2 w-[1px] h-full bg-[#d7dfff]"></span>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="lg:max-w-[428px] xl:max-w-[490px] w-full ml-auto pl-8 sm:pl-11 lg:pl-0 lg:pr-0 lg:mr-5 lg:text-right relative pb-12">
                  <span className="absolute top-1 left-0 lg:left-auto lg:-right-11 w-4 h-4 rounded-full bg-white border-4 border-primary"></span>
                  <h3 className="font-semibold text-xl text-black mb-1">BS in IT</h3>
                  <p className="font-semibold text-base text-body-color mb-3">University of Missouri | Columbia MO</p>
                  <span className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-primary text-white text-xs font-semibold mb-5"> 2010 - 2014 </span>
                  <p className="font-medium text-base text-body-color">
                    Graduated Honors Scholor with a 3.5 GPA. Recieved a Bachelors of Science in Information Technology with a Minor in Computer Science.
                  </p>
                </div>
              </div>
              {workHistory.reverse().map((previousWork, index) => {
                return (
                  <>
                    <div className="w-full lg:w-1/2 px-4"></div>
                    <div className="w-full lg:w-1/2 px-4"></div>
                    <div className="w-full lg:w-1/2 px-4">
                      <div className={`lg:max-w-[428px] xl:max-w-[490px] w-full pl-8 sm:pl-11 lg:pl-0  relative pb-12 ${index % 2 === 0 ? 'lg:ml-5' : 'ml-auto lg:pr-0 lg:text-right lg:mr-5'}`}>
                        <span className={`absolute top-1 left-0 ${index % 2 === 0 ? 'lg:-left-11' : 'lg:left-auto lg:-right-11'} w-4 h-4 rounded-full bg-white border-4 border-primary`}></span>
                        <h3 className="font-semibold text-xl text-black mb-1">{previousWork.title}</h3>
                        <p className="font-semibold text-base text-body-color mb-3">{previousWork.company}</p>
                        <span className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-primary text-white text-xs font-semibold mb-5">{previousWork.tenure}</span>
                        <p className="font-medium text-base text-body-color">
                          {previousWork.accomplishments.map(accomplishment => <span key={accomplishment.id}>{accomplishment.description} </span>)}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })}


            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute right-0 top-0 z-0">
          <svg width="455" height="1307" viewBox="0 0 455 1307" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.08" width="332.05" height="1060.35" transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1031.2 139.128)" fill="url(#paint0_linear_0:1)" />
            <rect opacity="0.08" width="509.849" height="1060.35" transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1293.7 635.81)" fill="url(#paint1_linear_0:1)" />
            <defs>
              <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1060.35" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_0:1" x1="254.924" y1="0" x2="254.924" y2="1060.35" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg width="416" height="1453" viewBox="0 0 416 1453" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.08" width="332.05" height="1030.82" transform="matrix(0.632736 0.774368 0.774368 -0.632736 -603 1507.24)" fill="url(#paint0_linear_0:1)" />
            <rect opacity="0.08" width="791.583" height="1060.35" transform="matrix(0.632736 0.774368 0.774368 -0.632736 -906.263 670.922)" fill="url(#paint1_linear_0:1)" />
            <defs>
              <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1030.82" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_0:1" x1="395.791" y1="0" x2="395.791" y2="1060.35" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  )
}

export default Resume