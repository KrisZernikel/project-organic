import { useState } from 'react'
import axios from 'axios'

async function getMarketsByZip (zip) {
  const res = await axios.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip)

  console.log(res.data)

  return res.data
}

export function FarmersMarketsPage () {
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
      <h1>Farmers Markets</h1>
      <p>Find farmers markets</p>
      {((data && data.results) || []).map((market, index) => {
        return <li key={index}>{JSON.stringify(market)}</li>
      })}
      <br />
      <input type='number' onChange={handleChange} />
    </>
  )
}
