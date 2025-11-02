import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import CreateEventPage from './pages/CreateEventPage'
import EventDetailPage from './pages/EventDetailPage'
import IntegrationPage from './pages/IntegrationPage'
import CampusPortalPage from './pages/CampusPortalPage'
import OrgProfilePage from './pages/OrgProfilePage'
import OrgEventsPage from './pages/OrgEventsPage'
import MicrositePage from './pages/MicrositePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/create-event" element={<CreateEventPage />} />
          <Route path="/dashboard/integrations" element={<IntegrationPage />} />
          <Route path="/dashboard/org-profile" element={<OrgProfilePage />} />
          <Route path="/dashboard/org-events" element={<OrgEventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/portal/kampus" element={<CampusPortalPage />} />
          <Route path="/o/:slug" element={<MicrositePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

