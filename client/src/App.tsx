import './App.css';
import { Routes,Route } from 'react-router';
import Rewards from './pages/rewards';
import Home from './pages/home';
import Dashboard from './pages/dashboard.tsx';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './contexts/userContexts';
import Profile from './pages/profile.tsx';



function App() {
  return (
    <>
    <AppProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
