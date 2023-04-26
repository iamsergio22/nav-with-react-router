import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Blog from './Blog'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'
import Menu from './Menu'
import BlogPost from './BlogPost'
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'

function App() {

  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<Blog/>}>
            <Route path=':slug' element={<BlogPost/>}/>
          </Route>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
