// React Imports
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// CSS
import './App.css'

// Components
import Navbar from './components/Navbar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'

const App = () => {

  const defaultState = {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  }

  const [mailboxes, setMailboxes] = useState([defaultState])

  const addBox = (newMailBox) => {
    setMailboxes([...mailboxes, newMailBox])
  }

  return (
    <>
    <h1>Mailboxes</h1>
    <Navbar />
    <Routes>
      <Route path={'/'} element={<main><h1>Post Office</h1></main>} />
      <Route path={'/mailboxes'} element={ <MailboxList mailboxes={mailboxes}/> }/>
      <Route path={'/new-mailbox'} element={ <MailboxForm addBox={addBox}/> }/>
      <Route path={'/mailboxes/:mailboxId'} element={ <MailboxDetails mailboxes={mailboxes}/> } />
    </Routes>
    </>

  )
}

export default App
