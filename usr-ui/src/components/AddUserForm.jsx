import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../context/UserActions'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

const AddUserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const { dispatch } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      firstName,
      lastName,
      email,
    }
    addUser(userData)
      .then(() => {
        toast.success('User created successfully!')
        dispatch({ type: 'ADD_USER', payload: userData })
        navigate('/')
      })
      .catch((error) => {
        toast.error('Failed to create user!')
      })
  }

  const addUser = async (userData) => {
    await createUser(userData)
  }

  return (
    <Row>
      <Col md={4} className='mx-auto'>
        <h2 className='text-center'>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              className='form-control'
              id='firstName'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              className='form-control'
              id='lastName'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='form-control'
              id='email'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Add User
          </button>
        </form>
      </Col>
    </Row>
  )
}

export default AddUserForm
