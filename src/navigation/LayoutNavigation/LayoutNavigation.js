import {
  useParams,
  useNavigate
} from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'

export function LayoutNavigation (props) {
  const navigate = useNavigate()
  const params = useParams()
  const currentIndex = props.data.findIndex((object) => object.path === params['*']) || 0
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  console.log()

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
