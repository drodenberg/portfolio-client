import Resume from './resume'

async function getData() {
  const res = await fetch('http://127.0.0.1:1337/api/resumes?populate=deep', {
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

  return data.data[0].attributes
}

const ResumePage = async () => {
  const data = await getData()

  return <Resume data={data} />
}

export default ResumePage