import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignupCard from './pages/SignUp'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='/Signup' element={<SignupCard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
