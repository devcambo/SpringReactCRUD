import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import MainNavbar from './components/MainNavbar'
import { Container } from 'react-bootstrap'
import UserProfilePage from './pages/UserProfilePage'
import AddUserForm from './components/AddUserForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UpdateUserForm from './components/UpdateUserForm'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <MainNavbar />
        <Container className='mt-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add-user' element={<AddUserForm />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/users/:userId' element={<UserProfilePage />} />
            <Route path='/users/:userId/edit' element={<UpdateUserForm />} />
            {/* Catch-all route for 404 Not Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Container>
        <ToastContainer />
      </Router>
    </UserProvider>
  )
}

export default App
