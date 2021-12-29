import { useState } from 'react'
import axios from 'axios'

async function getMarketsByZip (zip = 53211) {
  const res = await axios.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip)

  console.log(res.data)

  return res.data
}

export function FarmersMarketPage () {
  const [data, setData] = useState(null)

  async function handleChange (event) {
    const zip = event.target.value

    if (zip >= 10000 && zip <= 99999) {
      const data = await getMarketsByZip(zip)

      setData(data)
    }
  }

  return (
    <>
      <h1>Farmers Market</h1>
      <p>Find farmers markets near</p>
      {JSON.stringify(data)}
      <br />
      <input type='number' onChange={handleChange} />
    </>
  )
}
