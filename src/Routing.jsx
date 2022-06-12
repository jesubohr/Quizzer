import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'

import NotFound from "@page/NotFound"

export default function Routing () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}
