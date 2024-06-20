import Image from 'next/image'
import enterprise from '../../../public/enterprise.jpeg'
import bayer from '../../../public/bayer.png'
import nga from '../../../public/nga.png'
import mastercard from '../../../public/mastercard.png'

interface PreviousClientProps {
  clients: Array<PreviousClient>
}

interface PreviousClient {
  id: string
  logo: string
}

const PreviousClients: React.FC<PreviousClientProps> = (previousClients) => {
  return (
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
              {previousClients.clients.map(client => (

                <Image key={client.id} alt='daniel_rodenberg' width={200} height={200} src={`https://portfolio-server.services.divvit.co/assets/${client.logo}`} />
              ))}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section >)
}

export default PreviousClients