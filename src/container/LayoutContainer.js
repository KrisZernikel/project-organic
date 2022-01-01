import {
  Routes,
  Route
} from 'react-router-dom'
import PagesData from '../data/PagesData.json'
import { AppBar } from '../component'
import * as Pages from '../page'

export function LayoutContainer () {
  return (
    <AppBar.AppBarComponent brand='CO' label='Citizen Organic'>
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
    </AppBar.AppBarComponent>
  )
}
