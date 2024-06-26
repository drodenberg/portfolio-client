import Hero from '@/components/portfolio/hero'
import AboutMe from '@/components/portfolio/aboutMe'
import Expertise from '@/components/portfolio/expertise'
import Projects from '@/components/portfolio/projects'
import PreviousClients from '@/components/portfolio/previousClients'
import Resume from '@/components/portfolio/resume'
import Footer from '@/components/portfolio/footer'

async function getData() {
  const res = await fetch('https://portfolio-server.services.divvit.co/items/personal_website?fields=*.*,work_history.accomplishments.*.*', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data.data[0]
}

export default async function Home() {
  const data = await getData()

  return (
    <>
      <Hero currentPosition={data.position} shortExperienceDescription={data.shortExperienceDescription} />
      <AboutMe tagLine={data.personalTagLine} shortBio={data.shortBio} shortCareerDescription={data.shortCareerDescription} />
      <Expertise expertise={data.expertise} />
      <Projects projects={data.portfolio} />
      <PreviousClients clients={data.previous_clients} />
      <Resume data={data.work_history} />
      <Footer email={data.email} phoneNumber={data.phoneNumber} facebookLink={data.facebookLink} twitterLink={data.twitterLink} linkedInLink={data.linkedInLink} />
    </>
  )
}

{/* <main classNameName="flex min-h-screen flex-col items-center justify-between p-24"> */ }
//   <div classNameName="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//     <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//       Get started by editing&nbsp;
//       <code classNameName="font-mono font-bold">src/app/page.tsx</code>
//     </p>
//     <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//       <a
//         classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         By{' '}
//         <Image
//           src="/vercel.svg"
//           alt="Vercel Logo"
//           classNameName="dark:invert"
//           width={100}
//           height={24}
//           priority
//         />
//       </a>
//     </div>
//   </div>

//   <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//     <Image
//       classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//       src="/next.svg"
//       alt="Next.js Logo"
//       width={180}
//       height={37}
//       priority
//     />
//   </div>

//   <div classNameName="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//     <a
//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//         Docs{' '}
//         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Find in-depth information about Next.js features and API.
//       </p>
//     </a>

//     <a
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//         Learn{' '}
//         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Learn about Next.js in an interactive course with&nbsp;quizzes!
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//         Templates{' '}
//         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Explore the Next.js 13 playground.
//       </p>
//     </a>

//     <a
//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//       classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <h2 classNameName={`mb-3 text-2xl font-semibold`}>
//         Deploy{' '}
//         <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//           -&gt;
//         </span>
//       </h2>
//       <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
//         Instantly deploy your Next.js site to a shareable URL with Vercel.
//       </p>
//     </a>
//   </div>
// </main>
