import React, { useContext, useEffect, useCallback } from 'react'
import UserContext from '../context/UserContext'
import { findAllUsers } from '../context/UserActions'
import UserCard from '../components/UserCard'
import { Card, Col, Row } from 'react-bootstrap'

const HomePage = () => {
  const { users, dispatch } = useContext(UserContext)

  const fetchUsers = useCallback(async () => {
    const userData = await findAllUsers()
    dispatch({ type: 'FIND_USERS', payload: userData })
  }, [dispatch])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <Row>
      {users.length > 0 ? (
        users.map((user) => (
          <Col key={user.userId} md={3} className='mb-4'>
            <UserCard user={user} onUserDeleted={fetchUsers} />
          </Col>
        ))
      ) : (
        <Col>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title>No Users Found</Card.Title>
              <Card.Text>
                There are currently no users available. Please check back later.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  )
}

export default HomePage
