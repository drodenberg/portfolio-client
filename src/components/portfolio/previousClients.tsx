import Image from 'next/image'
import enterprise from '../../../public/enterprise.jpeg'
import bayer from '../../../public/bayer.png'
import nga from '../../../public/nga.png'
import mastercard from '../../../public/mastercard.png'

const PreviousClients = () => (
  <section id="clients" className='bg-white relative pt-[120px]' >
    <div className="container">
      <div className="flex flex-wrap mx-[-16px]">
        <div className="w-full px-4">
          <div className="max-w-[570px] mx-auto mb-12 text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">My Previous Clients</h2>
            <p className="font-medium text-lg text-body-color">These are the companies Ive worked for in the past or currently.</p>
          </div>
        </div>
        <div className="w-full px-4">
          <div
            className="flex flex-wrap items-center justify-center wow fadeInUp"
            data-wow-delay=".1s
              "
          >
            <a
              href="https://uideck.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] transition"
            >
              <Image alt='daniel_rodenberg' src={enterprise} />
              <img src="images/brands/uideck.svg" alt="uideck" />
            </a>
            <a
              href="https://tailgrids.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] "
            >
              <Image alt='daniel_rodenberg' src={bayer} />
            </a>
            <a
              href="https://ayroui.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px] "
            >
              <Image alt='daniel_rodenberg' src={nga} />
            </a>
            <a
              href="https://plainadmin.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[120px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px]"
            >
              <Image alt='daniel_rodenberg' src={mastercard} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default PreviousClients