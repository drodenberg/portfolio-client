interface FooterProps {
  email: string
  phoneNumber: string
  facebookLink: string
  twitterLink: string
  linkedInLink: string
}

const Footer: React.FC<FooterProps> = ({ email, phoneNumber, facebookLink, twitterLink, linkedInLink }) => (
  <footer className="bg-black pt-[100px] pb-12 relative z-10">
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-4/12 px-4">
          <div className="mb-10">
            <h2 className="font-bold text-white text-[44px] leading-tight mb-5">Lets Talk!</h2>
            <h3 className="font-bold text-white opacity-70 text-2xl mb-2">Contact Info</h3>
            <p className="font-medium text-base text-body-color mb-1">{email}</p>
            <p className="font-medium text-base text-body-color mb-1">{phoneNumber}</p>
          </div>
        </div>


        <div className="mt-10 pt-12 border-t border-white border-opacity-10">
          <div className="flex items-center justify-center mb-5">
            <a
              href='https://www.facebook.com/daniel.rodenberg'
              className="flex items-center justify-center w-8 h-8 founded-full mx-2 text-body-color hover:text-primary"
              aria-label="social-link"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C16.0938 32 16.1875 32 16.2812 31.9937V19.5438H12.8438V15.5375H16.2812V12.5875C16.2812 9.16875 18.3688 7.30625 21.4188 7.30625C22.8813 7.30625 24.1375 7.4125 24.5 7.4625V11.0375H22.4C20.7437 11.0375 20.4188 11.825 20.4188 12.9812V15.5312H24.3875L23.8687 19.5375H20.4188V31.3813C27.1063 29.4625 32 23.3062 32 16Z"
                />
              </svg>
            </a>

            <a
              href='https://twitter.com/D_Rode92'
              className="flex items-center justify-center w-8 h-8 founded-full mx-2 text-body-color hover:text-primary"
              aria-label="social-link"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                <path
                  d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM23.3054 12.4751C23.3125 12.6326 23.3159 12.7908 23.3159 12.9497C23.3159 17.8025 19.6221 23.3984 12.8669 23.3987H12.8672H12.8669C10.793 23.3987 8.86304 22.7908 7.23779 21.749C7.52515 21.783 7.81763 21.7998 8.11377 21.7998C9.83447 21.7998 11.418 21.2129 12.675 20.2278C11.0674 20.198 9.71191 19.1362 9.24414 17.677C9.46802 17.72 9.69824 17.7434 9.93433 17.7434C10.2695 17.7434 10.5942 17.6982 10.9028 17.614C9.22241 17.2776 7.95654 15.7925 7.95654 14.0142C7.95654 13.9976 7.95654 13.9827 7.95703 13.9673C8.4519 14.2424 9.01782 14.408 9.62036 14.4265C8.63428 13.7686 7.98608 12.6438 7.98608 11.3696C7.98608 10.6968 8.16797 10.0664 8.4834 9.52368C10.2944 11.7458 13.001 13.2073 16.0532 13.3608C15.9902 13.0918 15.9578 12.8115 15.9578 12.5234C15.9578 10.4961 17.6025 8.85132 19.6306 8.85132C20.687 8.85132 21.6411 9.29785 22.3113 10.0117C23.1479 9.84668 23.9336 9.54102 24.6433 9.12036C24.3687 9.97754 23.7866 10.6968 23.0283 11.1516C23.7712 11.0627 24.4792 10.8657 25.1372 10.5732C24.6458 11.3098 24.0225 11.9568 23.3054 12.4751Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-rodenberg-a182a85a/"
              className="flex items-center justify-center w-8 h-8 founded-full mx-2 text-body-color hover:text-primary"
              aria-label="social-link"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" className="fill-current">
                <path
                  d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM11.3506 24.1875H7.45386V12.4641H11.3506V24.1875ZM9.40234 10.8633H9.37695C8.06934 10.8633 7.22363 9.96313 7.22363 8.83813C7.22363 7.68774 8.09521 6.8125 9.42822 6.8125C10.7612 6.8125 11.5815 7.68774 11.6069 8.83813C11.6069 9.96313 10.7612 10.8633 9.40234 10.8633ZM25.4014 24.1875H21.5051V17.9158C21.5051 16.3396 20.9409 15.2646 19.531 15.2646C18.4546 15.2646 17.8135 15.9897 17.5317 16.6897C17.4287 16.9402 17.4036 17.2903 17.4036 17.6406V24.1875H13.5071C13.5071 24.1875 13.5581 13.564 13.5071 12.4641H17.4036V14.124C17.9214 13.3252 18.8479 12.189 20.9153 12.189C23.479 12.189 25.4014 13.8645 25.4014 17.4653V24.1875Z"
                />
              </svg>
            </a>
          </div>
          <p className="font-medium text-base text-body-color text-center">All rights reserved by © Portfolio creative 2024</p>
        </div>
      </div>
    </div>

    <div className="absolute left-0 bottom-0 -z-1" aria-label="shape">
      <span className="hidden">shape</span>
      <svg width="143" height="138" viewBox="0 0 143 138" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="118" r="101" stroke="url(#paint0_linear_52:83)" stroke-width="34" />
        <defs>
          <linearGradient id="paint0_linear_52:83" x1="-12.7969" y1="-37.3359" x2="99.2109" y2="173.773" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4A6CF7" />
            <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute right-3 top-3 -z-1" aria-label="shape">
      <span className="hidden">shape</span>
      <svg width="61" height="77" viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <circle cx="45.0001" cy="1.66667" r="1.66667" transform="rotate(90 45.0001 1.66667)" fill="white" />
          <circle cx="16.0001" cy="1.66667" r="1.66667" transform="rotate(90 16.0001 1.66667)" fill="white" />
          <circle cx="59.0001" cy="1.66667" r="1.66667" transform="rotate(90 59.0001 1.66667)" fill="white" />
          <circle cx="30.6668" cy="1.66667" r="1.66667" transform="rotate(90 30.6668 1.66667)" fill="white" />
          <circle cx="1.66683" cy="1.66667" r="1.66667" transform="rotate(90 1.66683 1.66667)" fill="white" />
          <circle cx="45.0001" cy="16.3332" r="1.66667" transform="rotate(90 45.0001 16.3332)" fill="white" />
          <circle cx="16.0001" cy="16.3332" r="1.66667" transform="rotate(90 16.0001 16.3332)" fill="white" />
          <circle cx="59.0001" cy="16.3332" r="1.66667" transform="rotate(90 59.0001 16.3332)" fill="white" />
          <circle cx="30.6668" cy="16.3332" r="1.66667" transform="rotate(90 30.6668 16.3332)" fill="white" />
          <circle cx="1.66683" cy="16.3332" r="1.66667" transform="rotate(90 1.66683 16.3332)" fill="white" />
          <circle cx="45.0001" cy="31.0002" r="1.66667" transform="rotate(90 45.0001 31.0002)" fill="white" />
          <circle cx="45.0001" cy="74.6667" r="1.66667" transform="rotate(90 45.0001 74.6667)" fill="white" />
          <circle cx="16.0001" cy="31.0002" r="1.66667" transform="rotate(90 16.0001 31.0002)" fill="white" />
          <circle cx="16.0001" cy="74.6667" r="1.66667" transform="rotate(90 16.0001 74.6667)" fill="white" />
          <circle cx="59.0001" cy="31.0002" r="1.66667" transform="rotate(90 59.0001 31.0002)" fill="white" />
          <circle cx="59.0001" cy="74.6667" r="1.66667" transform="rotate(90 59.0001 74.6667)" fill="white" />
          <circle cx="30.6668" cy="31.0002" r="1.66667" transform="rotate(90 30.6668 31.0002)" fill="white" />
          <circle cx="30.6668" cy="74.6667" r="1.66667" transform="rotate(90 30.6668 74.6667)" fill="white" />
          <circle cx="1.66683" cy="31.0002" r="1.66667" transform="rotate(90 1.66683 31.0002)" fill="white" />
          <circle cx="1.66683" cy="74.6667" r="1.66667" transform="rotate(90 1.66683 74.6667)" fill="white" />
          <circle cx="45.0001" cy="45.6667" r="1.66667" transform="rotate(90 45.0001 45.6667)" fill="white" />
          <circle cx="16.0001" cy="45.6667" r="1.66667" transform="rotate(90 16.0001 45.6667)" fill="white" />
          <circle cx="59.0001" cy="45.6667" r="1.66667" transform="rotate(90 59.0001 45.6667)" fill="white" />
          <circle cx="30.6668" cy="45.6667" r="1.66667" transform="rotate(90 30.6668 45.6667)" fill="white" />
          <circle cx="1.66683" cy="45.6667" r="1.66667" transform="rotate(90 1.66683 45.6667)" fill="white" />
          <circle cx="45.0001" cy="60.3332" r="1.66667" transform="rotate(90 45.0001 60.3332)" fill="white" />
          <circle cx="16.0001" cy="60.3332" r="1.66667" transform="rotate(90 16.0001 60.3332)" fill="white" />
          <circle cx="59.0001" cy="60.3332" r="1.66667" transform="rotate(90 59.0001 60.3332)" fill="white" />
          <circle cx="30.6668" cy="60.3332" r="1.66667" transform="rotate(90 30.6668 60.3332)" fill="white" />
          <circle cx="1.66683" cy="60.3332" r="1.66667" transform="rotate(90 1.66683 60.3332)" fill="white" />
        </g>
      </svg>
    </div>
  </footer>
)

export default Footer