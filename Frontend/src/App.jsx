import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import Login from './views/auth/Login'
import Base from './views/auth/Base'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Base/>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
