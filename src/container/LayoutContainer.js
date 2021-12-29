import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import PagesData from '../data/PagesData.json'
import * as Pages from '../page'

export function LayoutContainer () {
  const [activeIndex, setActiveIndex] = useState(0)

  const navigate = useNavigate()

  const handleClick = path => event => {
    navigate(path)
  }

  function handleChange (event, activeIndex) {
    setActiveIndex(activeIndex)
  }

  return (
    <Container>
      <Tabs
        value={activeIndex}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='main navigation'
      >
        {
          PagesData.map((page, index) => <Tab key={index} onClick={handleClick(page.path)} label={page.label} />)
        }
      </Tabs>
      <Routes>
        {
          PagesData.map((page, index) => {
            const Page = Pages[page.page] || Pages.NotFoundPage

            return <Route key={index} path={page.path} element={<Page />} />
          }).concat(
            <Route key={-1} path='*' element={<Pages.NotFoundPage />} />
          )
        }
      </Routes>
    </Container>
  )
}
