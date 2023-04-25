import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Blog from './Blog'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'
import Menu from './Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
