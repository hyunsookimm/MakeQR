import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import BusinessArea from './pages/BusinessArea'
import Location from './pages/Location'
import Contact from './pages/Contact'
import DesignBrand from './pages/DesignBrand'

function Layout() {
  const location = useLocation()
  const isWhitePage =
    location.pathname.startsWith('/about') ||
    location.pathname.startsWith('/design')

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: isWhitePage ? '#fff' : '#0a0a0a',
    }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/business" element={<BusinessArea />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="/about/contact" element={<Contact />} />
          <Route path="/design/brand" element={<DesignBrand />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}