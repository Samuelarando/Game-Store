import './App.css'
import Home from "./pages/Home"
import CekStatus from './pages/CekStatus'
import TopUpDetailPage from './pages/TopUpDetailPage' 
import AccountMarketPage from './pages/AccountMarketPage'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cek-status" element={<CekStatus />} />
          <Route path="/topup/:gameId" element={<TopUpDetailPage />} />
          <Route path="/jualakun/:gameId" element={<AccountMarketPage />}/>
        </Routes>
    </>
  )
}