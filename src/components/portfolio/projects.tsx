import Image from 'next/image'

interface ProjectsProps {
  projects: Array<Portfolio>
}

interface Portfolio {
  id: string
  title: string
  description: string
  image: string
  link: string
  type: string
  order: number
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="portfolio" className="pt-[120px] pb-[70px] bg-[#f8f9ff]">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[600px] mx-auto text-center mb-[50px]">
              <span className="font-semibold text-lg text-primary block mb-2"> Creative Portfolio </span>
              <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5">Recent Work</h2>
              <p className="font-medium text-lg text-body-color">These are some of my favorite projects Ive worked on.</p>
            </div>
          </div>
          {/* <div className="w-full px-4">
            <div className="portfolio-buttons flex flex-wrap items-center justify-center mb-12">
              <button className="sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color active" data-filter="*">All</button>
              <button
                className="sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white"
                data-filter=".web"
              >
                Web Apps
              </button>
              <button
                className="sm:font-semibold text-sm sm:text-base block py-2 px-5 md:mx-2 mb-2 rounded-full text-body-color hover:bg-primary hover:text-white"
                data-filter=".graphics"
              >
                Mobile
              </button>

            </div>
          </div> */}
        </div>
        <div className="portfolio-container flex justify-center -mx-4">
          <div className="w-full xl:w-10/12 px-4">
            <div className="items-wrapper flex flex-wrap justify-center mx-[-16px]">
              {
                projects.sort((a, b) => a.order < b.order ? -1 : 1).map(project => {
                  return (
                    <div key={project.id} className="w-full md:w-1/2 px-4 item web app">
                      <div className="mb-12">
                        <div className="relative group mb-8 overflow-hidden shadow-service rounded-md ">
                          <Image width={1000} height={1000} src={`https://portfolio-server.services.divvit.co/assets/${project.image}`} alt="image" className="w-full" />
                        </div>
                        <h3 className="mt-6">
                          <a href={project.link} className="font-semibold text-black hover:text-primary text-xl inline-block mb-3">{project.title}</a>
                        </h3>
                        <p className="font-medium text-base text-body-color">{project.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects