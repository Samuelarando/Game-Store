import React, { lazy, Suspense } from 'react' // 1. WAJIB IMPORT INI
import './App.css'
import Home from "./pages/Home"
import CekStatus from './pages/CekStatus'
import { Routes, Route } from 'react-router-dom'


const TopUpDetailPage = lazy(() => import('./pages/TopUpDetailPage')) 
const AccountMarketPage = lazy(() => import('./pages/AccountMarketPage'))

export default function App() {
  return (
    <>      
      
      <Suspense fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono text-xs uppercase tracking-widest animate-pulse">
          Memuat Johenstore... ⚡
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cek-status" element={<CekStatus />} />
          <Route path="/topup/:gameId" element={<TopUpDetailPage />} />
          <Route path="/jualakun/:gameId" element={<AccountMarketPage />}/>
        </Routes>
      </Suspense>
    </>
  )
}