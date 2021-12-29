import {
  useNavigate
} from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'

export function LayoutNavigation (props) {
  const [activeIndex, setActiveIndex] = useState(0)

  const navigate = useNavigate()

  const handleClick = path => event => {
    navigate(path)
  }

  function handleChange (event, activeIndex) {
    setActiveIndex(activeIndex)
  }

  return (
    <Tabs
      value={activeIndex}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons
      allowScrollButtonsMobile
      aria-label='main navigation'
    >
      {
        props.data.map((page, index) => <Tab key={index} onClick={handleClick(page.path)} label={page.label} />)
      }
    </Tabs>
  )
}
