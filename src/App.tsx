import './App.css'
import Home from '@/pages/Home'
import HomeEn from '@/pages/HomeEn'

function App() {
  const path = window.location.pathname

  if (path === '/en' || path.startsWith('/en/')) {
    return <HomeEn />
  }

  return <Home />
}

export default App
