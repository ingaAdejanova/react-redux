import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '../theme/globalStyles'
import { Modal } from '../components/Modal'

const BirthDayPage = React.lazy(() => import('../pages/BirthdayPage/BirthdayPage'))

export const ROUTES = {
  BIRTHDAYS: '/',
  // Add more routes here as needed
}

const Root = () => (
  <Router>
    <Suspense fallback={<div></div>}>
      <Modal />
      <GlobalStyles />
      <Routes>
        <Route path={ROUTES.BIRTHDAYS} element={<BirthDayPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Suspense>
  </Router>
)

export default Root
