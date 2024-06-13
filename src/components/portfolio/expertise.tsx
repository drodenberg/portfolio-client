import Image from 'next/image'
import frontend from '../../../public/front-end.png'

interface ExpertiseProps {
  expertise: Expertise;
}

interface Expertise {
  data: Array<ParentArray>;
}

interface ParentArray {
  id: string;
  attributes: ExpertiseItem;
}

interface ExpertiseItem {
  title: string;
  skills: string;
  icon: ParentWrapper;
}

interface ParentWrapper {
  data: ParentIcon;
}

interface ParentIcon {
  id: number;
  attributes: ExpertiseIcon;
}

interface ExpertiseIcon {
  url: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ expertise }) => {
  console.log(expertise.data)

  return (
    <section id="services" className="bg-black relative">
      <div className="container">
        <div className="pt-[120px] pb-[90px] border-t bg-black border-[#E9ECF8]">
          <div className="flex flex-wrap mx-[-16px]">
            <div className="w-full px-4">
              <div className="max-w-[600px] mx-auto text-center mb-[70px]">
                <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[45px] text-white mb-5">Areas of Expertise</h2>
                <p className="font-medium text-lg text-body-color">These are some but not all of my most experienced libraries.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-wrap mx-[-16px]">

            {expertise.data.map(expert => (
              <div key={expert.id} className="w-full md:w-1/2 xl:w-1/4 px-4">
                <div className="bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
                  <div
                    className="mx-auto w-20 h-20 mb-6 rounded-full flex items-center justify-center text-white bg-white"
                  >
                    {/* <svg width="35" height="33" viewBox="0 0 35 33" className="text-primary">
                  <path
                    d="M22.8335 14.0001C27.0002 14.0001 30.3335 17.3334 30.3335 21.5001C30.3335 22.9668 29.9168 24.3501 29.1835 25.5001L34.3168 30.6668L32.0002 32.9834L26.8002 27.8668C25.6502 28.5834 24.2835 29.0001 22.8335 29.0001C18.6668 29.0001 15.3335 25.6668 15.3335 21.5001C15.3335 17.3334 18.6668 14.0001 22.8335 14.0001ZM22.8335 17.3334C21.7284 17.3334 20.6686 17.7724 19.8872 18.5538C19.1058 19.3352 18.6668 20.395 18.6668 21.5001C18.6668 22.6052 19.1058 23.665 19.8872 24.4464C20.6686 25.2278 21.7284 25.6668 22.8335 25.6668C23.9386 25.6668 24.9984 25.2278 25.7798 24.4464C26.5612 23.665 27.0002 22.6052 27.0002 21.5001C27.0002 20.395 26.5612 19.3352 25.7798 18.5538C24.9984 17.7724 23.9386 17.3334 22.8335 17.3334ZM13.6668 0.666748C15.4349 0.666748 17.1306 1.36913 18.3809 2.61937C19.6311 3.86961 20.3335 5.56531 20.3335 7.33342C20.3335 8.85008 19.8168 10.2501 18.9668 11.3834C17.5335 11.9167 16.2502 12.7667 15.1835 13.8334L13.6668 14.0001C11.8987 14.0001 10.203 13.2977 8.95278 12.0475C7.70254 10.7972 7.00016 9.10153 7.00016 7.33342C7.00016 5.56531 7.70254 3.86961 8.95278 2.61937C10.203 1.36913 11.8987 0.666748 13.6668 0.666748ZM0.333496 27.3334V24.0001C0.333496 20.4668 5.85016 17.5667 12.8335 17.3334C12.3002 18.6334 12.0002 20.0334 12.0002 21.5001C12.0002 23.6501 12.6335 25.6668 13.6668 27.3334H0.333496Z"
                  />
                </svg> */}
                    <Image alt='frontend' width="35" height="33" src={`https://drodenberg-portfolio-ff4c6e7e8508.herokuapp.com/uploads/${expert.attributes.icon.data.attributes.url}`} />
                    {expert.attributes.icon.data.attributes.url}
                  </div>
                  <h3 className="font-bold  text-xl sm:text-2xl lg:text-xl 2xl:text-2xl text-white mb-3">{expert.attributes.title}</h3>
                  <p className="font-medium text-body-color text-white leading-relaxed text-sm">{expert.attributes.skills}</p>
                  <div>
                    <span className="absolute top-0 right-0 -z-1">
                      <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                        <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                      </svg>
                    </span>
                    <span className="absolute bottom-1 left-1 -z-1">
                      <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                        <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                        <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                        <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                        <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                        <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                        <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                        <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                        <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                        <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                        <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                        <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}




            {/* <div className="w-full md:w-1/2 xl:w-1/4 px-4">
            <div className="bg-white group hover:bg-primary shadow-service py-10 px-8 rounded-xl relative z-10 overflow-hidden text-center duration-200 mb-8">
              <div
                className="mx-auto w-20 h-20 mb-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" className="fill-current">
                  <path d="M16.6667 0V13.3333H30V0H16.6667ZM0 30H13.3333V16.6667H0V30ZM0 0V13.3333H13.3333V0H0ZM16.6667 21.6667H21.6667V16.6667H25V21.6667H30V25H25V30H21.6667V25H16.6667V21.6667Z" />
                </svg>
              </div>
              <h3 className="font-bold text-black text-xl sm:text-2xl lg:text-xl 2xl:text-2xl group-hover:text-white mb-3">Prototype</h3>
              <p className="font-medium text-body-color group-hover:text-white leading-relaxed text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.</p>
              <div>
                <span className="absolute top-0 right-0 -z-1">
                  <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white" />
                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white" />
                  </svg>
                </span>
                <span className="absolute bottom-1 left-1 -z-1">
                  <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white" />
                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white" />
                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white" />
                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white" />
                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white" />
                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white" />
                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white" />
                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white" />
                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white" />
                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white" />
                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white" />
                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}



export default Expertise