import React from 'react'
import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
  const history = useHistory()

  const addMeetupHandler = (meetupData) => {
    fetch('https://react-refresher-maxnext-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}
