import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import Register from './views/auth/Register'
import Login from './views/auth/Login'
import Base from './views/auth/Base'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Base/>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
