import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashPageModel from '../components/PageModel'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Account from '../pages/Account'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashPageModel />}>
          <Route index element={<Home />}></Route>
          <Route path="account" element={<Account />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}
