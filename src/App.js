import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { LayoutContainer } from './container'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<LayoutContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
