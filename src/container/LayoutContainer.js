import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import LayoutContainerJson from './LayoutContainer.json'
import * as Pages from '../page'

function LayoutContainer () {
  const [activeIndex, setActiveIndex] = useState(0)

  const navigate = useNavigate()

  const handleClick = path => event => {
    navigate(path)
  }

  function handleChange (event, newValue) {
    setActiveIndex(newValue)
  }

  return (
    <Container>
      <Tabs value={activeIndex} onChange={handleChange} aria-label='main navigation'>
        {
        LayoutContainerJson.map((page, index) => <Tab key={index} onClick={handleClick(page.path)} label={page.label} />)
        }
      </Tabs>
      <Routes>
        {
        LayoutContainerJson.map((page, index) => {
          const Page = Pages[page.page]

          return <Route key={index} path={page.path} element={<Page />} />
        })
        }
      </Routes>
    </Container>
  )
}

export default LayoutContainer
