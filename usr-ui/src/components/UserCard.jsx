import { useContext } from 'react'
import { ButtonGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { deleteUser } from '../context/UserActions'
import { toast } from 'react-toastify'

function UserCard({ user, onUserDeleted }) {
  const { dispatch } = useContext(UserContext)

  const handleDelete = async () => {
    if (
      window.confirm(
        `Are you sure you want to delete ${user.firstName} ${user.lastName}?`
      )
    ) {
      try {
        await deleteUser(user.userId)
        dispatch({ type: 'DELETE_USER', payload: user.userId })
        toast.success('User deleted successfully')
        
        // Call the callback to refresh the user list
        if (onUserDeleted) {
          onUserDeleted()
        }
      } catch (error) {
        console.error('Failed to delete user:', error)
        toast.error('Failed to delete user')
      }
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {user.firstName} {user.lastName}
        </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{user.email}</Card.Subtitle>
        <Card.Text>{user.createdAt}</Card.Text>
        <ButtonGroup aria-label='Basic example'>
          <Link
            className='btn btn-primary'
            role='button'
            to={`/users/${user.userId}`}
          >
            View
          </Link>
          <Link
            className='btn btn-warning'
            role='button'
            to={`/users/${user.userId}/edit`}
          >
            Update
          </Link>
          <Button variant='danger' onClick={handleDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}

export default UserCard