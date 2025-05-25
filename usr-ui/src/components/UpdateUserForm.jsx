import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser, findUserById } from '../context/UserActions'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

const UpdateUserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const { dispatch } = useContext(UserContext)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await findUserById(params.userId)
      if (userData) {
        setFirstName(userData.firstName)
        setLastName(userData.lastName)
        setEmail(userData.email)
      } else {
        toast.error('User not found!')
        navigate('/')
      }
    }
    fetchUserData()
  }, [params.userId])

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      firstName,
      lastName,
      email,
    }
    handleUpdateUser(params.userId, userData)
      .then(() => {
        toast.success('User updated successfully!')
        dispatch({
          type: 'UPDATE_USER',
          payload: { id: params.userId, ...userData },
        })
        navigate('/')
      })
      .catch((error) => {
        toast.error('Failed to update user!')
      })
  }

  const handleUpdateUser = async (userId, userData) => {
    await updateUser(userId, userData)
  }

  return (
    <Row>
      <Col md={4} className='mx-auto'>
        <h2 className='text-center'>Update User</h2>
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
            Update User
          </button>
        </form>
      </Col>
    </Row>
  )
}

export default UpdateUserForm
