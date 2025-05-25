import React from 'react'
import { Card, Container } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <Card className='p-4'>
      <h1 className='text-center'>About Us</h1>
      <p className='text-center'>
        This is a simple user management application built with React and
        Bootstrap. It allows you to view, add, edit, and delete users.
      </p>
      <p className='text-center'>
        The application uses a context API for state management and demonstrates
        basic CRUD operations.
      </p>
    </Card>
  )
}

export default AboutPage
