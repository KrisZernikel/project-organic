import {
  useParams,
  useNavigate
} from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'

export function AppBarTabsComponent (props) {
  const navigate = useNavigate()
  const params = useParams()
  const currentIndex = props.data.findIndex((object) => object.path === params['*']) || 0
  const [activeIndex, setActiveIndex] = useState(currentIndex)

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
      variant='fullWidth'
    //   scrollButtons
    //   allowScrollButtonsMobile
      aria-label='main navigation'
      centered
    >
      {
          props.data.map((page, index) => <Tab key={index} onClick={handleClick(page.path)} label={page.label} />)
        }
    </Tabs>
  )
}

export default AppBarTabsComponent
