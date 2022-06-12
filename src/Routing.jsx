import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import NotFound from "@page/NotFound"

import Home from '@page/Home'
import Quiz from "@page/Quiz"
import Result from "@page/Result"

export default function Routing () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={ <Home /> } />
          <Route path="quiz" element={ <Quiz /> } />
          <Route path="result" element={ <Result /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}
