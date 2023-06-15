const Projects = () => (
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
        <div className="w-full px-4">
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
        </div>
      </div>

      <div className="portfolio-container flex justify-center -mx-4">
        <div className="w-full xl:w-10/12 px-4">
          <div className="items-wrapper flex flex-wrap justify-center mx-[-16px]">
            <div className="w-full md:w-1/2 px-4 item web app">
              <div className="mb-12">
                <div className="relative group mb-8 overflow-hidden shadow-service rounded-md">
                  <img src="images/portfolio/portfolio-01.jpg" alt="image" className="w-full" />
                  <div
                    className="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                  >
                    <a href="images/portfolio/portfolio-01.jpg" className="glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="mt-6">
                  <a href="portfolio-details.html" className="font-semibold text-black hover:text-primary text-xl inline-block mb-3"> Divvit Golf </a>
                </h3>
                <p className="font-medium text-base text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 item graphics web">
              <div className="mb-12">
                <div className="relative group mb-8 overflow-hidden shadow-service rounded-md">
                  <img src="images/portfolio/portfolio-02.jpg" alt="image" className="w-full" />
                  <div
                    className="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                  >
                    <a href="images/portfolio/portfolio-02.jpg" className="glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="mt-6">
                  <a href="portfolio-details.html" className="font-semibold text-black hover:text-primary text-xl inline-block mb-3"> AirBnB Clone </a>
                </h3>
                <p className="font-medium text-base text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 item app">
              <div className="mb-12">
                <div className="relative group mb-8 overflow-hidden shadow-service rounded-md">
                  <img src="images/portfolio/portfolio-03.jpg" alt="image" className="w-full" />
                  <div
                    className="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                  >
                    <a href="images/portfolio/portfolio-03.jpg" className="glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="mt-6">
                  <a href="portfolio-details.html" className="font-semibold text-black hover:text-primary text-xl inline-block mb-3"> SaaS landing page </a>
                </h3>
                <p className="font-medium text-base text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 item graphics web">
              <div className="mb-12">
                <div className="relative group mb-8 overflow-hidden shadow-service rounded-md">
                  <img src="images/portfolio/portfolio-04.jpg" alt="image" className="w-full" />
                  <div
                    className="absolute w-full h-full top-0 left-0 bg-primary bg-opacity-[17%] flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
                  >
                    <a href="images/portfolio/portfolio-04.jpg" className="glightbox w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="mt-6">
                  <a href="portfolio-details.html" className="font-semibold text-black hover:text-primary text-xl inline-block mb-3"> Business & corporate template </a>
                </h3>
                <p className="font-medium text-base text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Projects