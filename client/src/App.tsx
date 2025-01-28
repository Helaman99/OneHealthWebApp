import './App.css';
import { Routes,Route } from 'react-router';
import Rewards from './pages/rewards';
import Home from './pages/home';
import Dashboard from './pages/dashboard.tsx';
import { BrowserRouter } from 'react-router';
import { AppProvider } from './contexts/userContexts';
import Navbar from './assets/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Learn from './pages/learn';
import Medication from './pages/medications';
import Admin from './pages/admin';


function App() {
  return (
    <>
    <AppProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/learn' element= {<Learn />} />
          <Route path ='/medication' element={<Medication />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/register' element={<Register/>} />
          <Route path='/admin' element={<Admin /> } />
        </Routes>
        </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
