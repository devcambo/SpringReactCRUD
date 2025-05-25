import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findUserById } from '../context/UserActions'
import UserContext from '../context/UserContext'
import { Card } from 'react-bootstrap'

const UserProfilePage = () => {
  const { userId } = useParams()
  const { user, dispatch } = useContext(UserContext)

  useEffect(() => {
    const fecthUserProfile = async () => {
      const profile = await findUserById(userId)
      dispatch({ type: 'FIND_USER', payload: profile })
    }
    fecthUserProfile()
  }, [dispatch, userId])

  return (
    <div>
      {user ? (
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>
              Full Name: {user.firstName} {user.lastName}
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              Email: {user.email}
            </Card.Subtitle>
            <Card.Text>Joined on: {user.createdAt}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>User Not Found</Card.Title>
            <Card.Text>
              The user you are looking for does not exist or has been removed.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default UserProfilePage
