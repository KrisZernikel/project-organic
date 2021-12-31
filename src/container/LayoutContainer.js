import {
  Routes,
  Route
} from 'react-router-dom'
import Container from '@mui/material/Container'
import PagesData from '../data/PagesData.json'
import { AppBar } from '../component'
import * as Pages from '../page'

export function LayoutContainer () {
  return (
    <Container
      disableGutters
    >
      <AppBar.TabsComponent
        data={PagesData}
      />
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
