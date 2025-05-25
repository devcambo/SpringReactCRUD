import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
})

// findAllUsers
export const findAllUsers = async () => {
  try {
    const response = await api.get('/users')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

// findUserById
export const findUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error)
    throw error
  }
}

// createUser
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData)
    return response.data
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

// updateUser
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData)
    return response.data
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error)
    throw error
  }
}

// deleteUser
export const deleteUser = async (userId) => {
  try {
    await api.delete(`/users/${userId}`)
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error)
    throw error
  }
}
