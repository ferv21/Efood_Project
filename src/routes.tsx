import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Local from './pages/Local'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Local />} />
  </Routes>
)

export default Rotas
