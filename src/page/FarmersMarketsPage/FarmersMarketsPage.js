import { useSelector, useDispatch } from 'react-redux'
import {
  setPreferenceZipCodeAction
} from '../../action'
import {
  selectPreferenceZipCode
} from '../../reducer'
import { useGetFarmersMarketsByZipCodeQuery } from '../../service'
import TextField from '@mui/material/TextField'
import validator from 'validator'
import { Table } from '../../component'

export function FarmersMarketsPage () {
  const zipCode = useSelector(selectPreferenceZipCode)
  const dispatch = useDispatch()
  const {
    data,
    error,
    isLoading,
    isFetching
  } = useGetFarmersMarketsByZipCodeQuery(zipCode, {
    skip: !validator.isPostalCode(zipCode, 'US')
  })

  function handleChange (event) {
    const zip = event.target.value

    dispatch(setPreferenceZipCodeAction(zip))
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (isFetching) {
    return (
      <p>Fetching...</p>
    )
  }

  if (error) {
    console.error(error)

    return (
      <p>An error occured :(</p>
    )
  }

  return (
    <>
      <h1>Farmers Markets</h1>
      <p>Find farmers markets</p>
      <TextField
        id='outlined-name'
        label='Zip Code'
        value={zipCode}
        onChange={handleChange}
      />
      <br />
      <Table.ShellComponent>
        <Table.ToolbarComponent title='Farmers Markets' />
        <Table.DataComponent rows={data.results} />
      </Table.ShellComponent>
    </>
  )
}
